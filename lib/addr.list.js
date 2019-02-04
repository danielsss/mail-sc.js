'use strict';

const debug = require('debug')('email-sc:address-list');
const Base = require('./base');
const Schema = require('./schemas/addr.list');
const kindOf = require('kind-of');

class AddressList extends Base {
  constructor(opts={}) {
    super(opts);

    for (const key in Schema) {
      if (!Schema.hasOwnProperty(key)) continue;

      // define methods
      this[key] = async (opts={}) => {
        const url = Schema[key].url;
        const method = Schema[key].method;
        const query = {apiUser: this.apiUser, apiKey: this.apiKey};

        const parameters = Schema[key].params;
        for (const p in parameters) {
          if (!parameters.hasOwnProperty(p)) continue;

          const desc = parameters[p];
          if (desc.required === true) {
            // must specify fields
            if (!opts[p]) throw new Error(`Missing ${param}`);
            // authenticate parameter types
            if (kindOf(opts[p]) !== desc.type) throw new Error(`opts.${p} must be ${desc.type}`);
            query[p] = opts[p];
          } else {
            if (kindOf(opts[p]) !== desc.type) {
              continue;
            }
            query[p] = opts[p];
          }
        }

        const options = {url, json: true};
        if (method === 'post') {
          options.formData = query;
        } else if (method === 'get') {
          options.url += `?${this.qs(query)}`;
        } else {
          debug('Unknown method: %s', method);
          throw new Error(`Unknown method: ${method}`);
        }

        return this.query(method, options);
      };
    }
  }

  query(method, options) {
    return this[method](options);
  }
}

module.exports = AddressList;
