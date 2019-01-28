'use strict';

const request = require('request');
const utils = require('./utils');

/**
 * @description Basic module
 */
class Base {
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
    this.apiKey = opts.apiKey;
    this.apiUser = opts.apiUser;
    this.from = opts.from || null;
    this.fromName = opts.fromName || '';
    this.utils = utils;
  }
  
  /**
   * @description make a post request
   * @param {Object} options
   * @return {Promise<any>}
   */
  post(options) {
    return new Promise((resolve, reject) => {
      request.post(options, (err, res, body) => {
        if (err) return reject(err);
        resolve(res, body);
      });
    });
  }
}

module.exports = Base;
