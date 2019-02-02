'use strict';

const debug = require('debug')('sc-email:sender');
const Base = require('./base');

/**
 * @description Email Sender
 */
class Deliveries extends Base {
  /**
   * constructor
   * @param {Object} opts
   */
  constructor(opts={}) {
    super(opts);
  }

  /**
   * @description Normally to send email or with a template
   * @param {Object} opts
   * @return {Promise<*>}
   */
  async send(opts={}) {
    if (!opts) {
      throw new Error('opts must be an object.' + this.utils.help());
    }

    const [MODULE, SEND, SEND_TEMPLATE] = ['mail', 'send', 'sendtemplate'];
    const query = {apiUser: this.apiUser, apiKey: this.apiKey};
    
    if (this.from) query.from = this.from;
    if (this.fromName) query.fromName = this.fromName;
    
    let url = this.requestURL(MODULE, SEND);
    if (opts.templateInvokeName) {
      url = this.requestURL(MODULE, SEND_TEMPLATE);
      query.templateInvokeName = opts.templateInvokeName;
    }
  
    let headers = {};
    for (const key in opts) {
      if (!opts.hasOwnProperty(key)) continue;
      if (query[key]) continue;
      if (key === 'to' || key === 'cc' || key === 'bcc') {
        query[key] = this.utils.parser(opts[key]);
        continue;
      }
      
      if (key === 'headers') {
        headers = opts[key];
        continue;
      }
      query[key] = opts[key];
    }
    
    const options = {url, formData: query, json: true};
    if (Object.keys(headers) > 0) {
      options.headers = headers;
    }
    debug('Access url: %s and options: %j', url, options);
    return this.post(options);
  }

  /**
   * @description Query address list task
   * @param {Object} opts
   * @return {Promise<*>}
   */
  async taskInfo(opts={}) {
    if (!opts || !opts.maillistTaskId) {
      throw new Error('Missing maillistTaskId');
    }
    const [MODULE, ACTION] = ['label', 'update'];
    const query = {
      apiUser: this.apiUser,
      apiKey: this.apiKey,
      maillistTaskId: parseInt(opts.maillistTaskId, 10),
    };
    const options = {json: true};
    options.url = this.requestURL(MODULE, ACTION);
    if (opts.method && this[opts.method]) {
      options.url += `?${this.qs.stringify(query)}`;
      return this[opts.method](options);
    }

    // use post as default access method
    options.formData = query;
    return this.post(options);
  }
}

module.exports = Deliveries;
