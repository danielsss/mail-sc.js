'use strict';

const debug = require('debug')('sendcloud:request');
const url = require('url');
const axios = require('axios');
const qs = require('querystring');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const translateRequestBody = function(data, /* eslint-disable-next-line */ headers) {
  return qs.stringify(data);
};

const tryMultipleRequest = async function(api, data, axiosOptions, retry, method) {
  if (retry <= 0) {
    return axios[method](api, data, axiosOptions);
  }

  while (retry > 0) {
    try {
      return await axios[method](api, data, axiosOptions).then(response => {
        /* istanbul ignore next */
        if (response.status !== 200) {
          /* istanbul ignore next */
          const message = `Access api:${api} got error with response text: ${response.statusText}`;
          /* istanbul ignore next */
          throw new Error(message);
        }
        return response;
      });
    } catch (e) {
      /* istanbul ignore next */
      debug('Caught axios[%s] error: %j', context.method, e);
      /* istanbul ignore next */
      retry--;
      if (retry === 0) {
        return Promise.reject(e);
      }
    }
  }
};

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

      const axiosOptions = {
        timeout: this.timeout,
        proxy: this.proxy || null,
        transformRequest: [translateRequestBody],
      };

      const retry = ~~this.retry;
      debug('retry = %d', retry);
      const mixed = Object.assign({}, options, params);
      debug('Making a request to: %s with method:%s\n parameters: %j', api, def, mixed);
      return tryMultipleRequest(api, {data: mixed}, axiosOptions, retry, context.method);
    };
  }
};

module.exports = builder;
