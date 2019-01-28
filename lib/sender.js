'use strict';

const debug = require('debug')('sc-email:sender');
const Base = require('./base');

const MODULE = 'mail';
const SEND = 'send';
const SEND_TEMPLATE = 'sendtemplate';

/**
 * @description Email Sender
 */
class Sender extends Base {
  /**
   * constructor
   * @param {Object} opts
   */
  constructor(opts={}) {
    super(opts);
  }

  /**
   * @description Normally to send email or with a template
   * @param {*} opts
   */
  async send(opts={}) {
    if (!opts) {
      throw new Error('opts must be an object.' + this.utils.help());
    }
    const query = {apiUser: this.apiUser, apiKey: this.apiKey};
    
    if (this.from) query.from = this.from;
    if (this.fromName) query.fromName = this.fromName;
    
    let url = this.utils.requestURL(MODULE, SEND);
    if (opts.templateInvokeName) {
      url = this.utils.requestURL(MODULE, SEND_TEMPLATE);
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
    return await this.post(options);
  }

  /**
   * @description Send meeting calendar
   */
  async calendar() {}

  /**
   * @description Query address list task
   */
  async addressListTasks() {}
}

module.exports = Sender;
