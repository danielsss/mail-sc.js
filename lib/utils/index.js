'use strict';

const debug = require('debug')('sc-email:base');
const templateURL = 'http://api.sendcloud.net/apiv2/{module}/{action}';

/**
 * @description returns help information
 * @return {String}
 */
const help = function() {
  return 'See: http://www.sendcloud.net';
};

const stringify = function(vars={}) {
  try {
    vars = JSON.stringify(vars);
  } catch (e) {
    debug('stringify failed with vars:', vars);
    return vars;
  }
};

/**
 * @description Generate access url
 * @param {String} module
 * @param {String} action
 * @return {String} url
 */
const requestURL = function(module, action) {
  return templateURL
    .replace('{module}', module)
    .replace('{action}', action);
};

const parser = function(to) {
  if (Array.isArray(to)) {
    return to.join(';');
  }
  return to;
};

module.exports = exports = {
  parser,
  parseTo: parser,
  parseCc: parser,
  parseBcc: parser,
  requestURL,
  stringify,
  help,
};
