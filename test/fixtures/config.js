'use strict';

let config = {};
try {
  config = require('../../.config');
} catch (e) {
  console.error('local config not found then use global env');
  console.error('import error:', e);
}

if (!config.apiKey) config.apiKey = process.env.API_KEY;
if (!config.apiUser) config.apiUser = process.env.API_USER;
if (!config.from) config.from = process.env.FROM;

module.exports = config;
