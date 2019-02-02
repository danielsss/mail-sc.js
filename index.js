'use strict';

const Deliveries = require('./lib/deliveries');
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
  constructor(opts={}) {
    if (!opts.apiKey) {
      throw new Error('You must specify the apiKey.' + utils.help());
    }
    if (!opts.apiUser) {
      throw new Error('You must specify the apiUser.' + utils.help());
    }
    this.deliver = new Deliveries(opts);
  }
}

module.exports = Entries;
