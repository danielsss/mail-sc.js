'use strict';

const request = require('request');
const utils = require('./utils');
const qs = require('querystring');

const methods = ['get', 'post', 'put', 'delete'];

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
    this.requestURL = utils.requestURL;
    this.qs = qs;
    this._init();
  }

  /**
   * @description Init
   */
  _init() {
    for (const method of methods) {
      const handler = m => {
        return options => {
          return new Promise((resolve, reject) => {
            const callback = (err, res, body) => {
              if (err) return reject(err);
              resolve(res, body);
            };
            request[m](options, callback);
          });
        };
      };
      this[method] = handler(method);
    }
  }
}

module.exports = Base;
