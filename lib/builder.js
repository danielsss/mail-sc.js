'use strict';

const debug = require('debug')('sendcloud:request');
const url = require('url');
const axios = require('axios');

const builder = function(source, definitions) {
  source.prototype.request = axios;
  
  for (const def in definitions) {
    /* istanbul ignore next */
    if (!definitions.hasOwnProperty(def)) continue;
    const context = definitions[def];
  
    /**
     * @description Make a request
     * @param {Object} options - See: http://www.sendcloud.net/doc/en/email_v2/
     * @return {Promise<*>}
     */
    /* istanbul ignore next */
    source.prototype[def] = function(options={}) {
      if (!context.href) {
        /* istanbul ignore next */
        throw new Error(`schema.${def} should have property href`);
      }
      
      if (!context.method) {
        /* istanbul ignore next */
        throw new Error(`schema.${def} should have property method`);
      }
  
      const href = context.href.startsWith('/') ? context.href : `/${context.href}`;
      const pathname = this.endpoint + href;
      
      const urlObject = {
        protocol: this.protocol,
        hostname: this.host,
        port: this.port,
        pathname,
      };
      const api = url.format(urlObject);
      const params = {apiUser: this.apiUser, apiKey: this.apiKey};
  
      debug('Make a request from: %s with method:%s\n parameters: %j', api, def, params);
      const axiosOptions = {timeout: this.timeout};
      return axios[context.method](api, Object.assign({}, params, options), axiosOptions);
    };
  }
};

module.exports = builder;
