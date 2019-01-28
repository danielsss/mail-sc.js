'use strict';

const Sender = require('./lib/sender');
const utils = require('./lib/utils');

/**
  * @description The module's entries
  */
class Entries {
  /**
   * constructor
   * @param {Object} opts -
   * {
   *  apiKey: string,
   *  apiUser: string,
   *  from?: string,
   *  fromName?: string
   * } 
   */
  constructor(opts) {
    if (!opts.apiKey) {
      throw new Error('You must specify the apiKey.' + utils.help());
    }
    if (!opts.apiUser) {
      throw new Error('You must specify the apiUser.' + utils.help());
    }
    this.sender = new Sender(opts);
  }
}

module.exports = Entries;
