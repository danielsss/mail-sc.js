'use strict';

module.exports = {
  list: {
    url: 'http://api.sendcloud.net/apiv2/addresslist/list',
    method: 'post',
    params: {
      address: {
        required: false,
        type: 'array',
      },
      start: {
        required: false,
        type: 'number',
      },
      limit: {
        required: false,
        type: 'number',
      },
    },
  },
};
