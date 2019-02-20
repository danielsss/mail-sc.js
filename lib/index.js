'use strict';

const builder = require('./builder');
const deliveries = require('./schemas/deliveries');
const template = require('./schemas/email.template');
const addressList = require('./schemas/address.list');

/**
 * @class
 * @property {Function} send - Regular delivery
 * @property {Function} sendTemplate - Template delivery
 * @property {Function} sendCalendar - Send meeting calendar
 * @property {Function} taskInfo - Get task info
 */
class SendCloud {
  /* istanbul ignore next */
  constructor(options={}) {
    if (!options.apiKey) {
      throw new Error('You must specify an apiKey value');
    }

    if (!options.apiUser) {
      throw new Error('You must specify an apiUser value');
    }

    this.apiKey = options.apiKey;
    this.apiUser = options.apiUser;
    this.timeout = options.timeout || 1000 * 6;
    this.host = options.host || 'api.sendcloud.net';
    this.endpoint = options.endpoint || '/apiv2';
    this.protocol = options.protocol || 'http:';
    this.port = options.port || 80;
    this.retry = options.retry || 1;
    this.proxy = options.proxy || null;
  }
}

builder(SendCloud, deliveries);
builder(SendCloud, template);
builder(SendCloud, addressList);

const createClient = function(options) {
  const sendCloud = new SendCloud(options);
  
  const target = {
    delivery: {},
    template: {},
    addressList: {},
  };
  
  const schemas = [
    {name: 'delivery', context: deliveries},
    {name: 'template', context: template},
    {name: 'addressList', context: addressList},
  ];
  
  for (const schema of schemas) {
    for (const key in schema.context) {
      /* istanbul ignore next */
      if (!schema.context[key]) {
        /* istanbul ignore next */
        continue;
      }
      target[schema.name][schema.context[key].alias] = sendCloud[key].bind(sendCloud);
    }
  }
  
  return new Proxy(target, {
    get: function(target, property) {
      /* istanbul ignore next */
      if (property in target) {
        return target[property];
      } else {
        /* istanbul ignore next */
        throw new ReferenceError(`target does not contain property '${property}'`);
      }
    },
  });
};

// module.exports = SendCloud;

module.exports = exports = {createClient, SendCloud};
