'use strict';

const builder = require('./builder');

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
  }
}

builder(SendCloud, require('./schemas/deliveries'));

module.exports = SendCloud;
