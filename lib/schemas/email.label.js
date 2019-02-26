'use strict';

module.exports = {
  batchQueryEmailLabels: {
    href: '/label/list',
    method: 'post',
    desc: 'List of returned labels (batchQuery)',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/label_do/#query-batch-query',
    alias: 'batchQuery',
  },
  queryEmailLabel: {
    href: '/label/get',
    method: 'post',
    desc: 'Get one label by labelId',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/label_do/#query',
    alias: 'getLabel',
  },
  addEmailLabel: {
    href: '/label/add',
    method: 'post',
    desc: 'Adding label',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/label_do/#add',
    alias: 'add',
  },
  deleteEmailLabel: {
    href: '/label/delete',
    method: 'post',
    desc: 'Deleting email label by id',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/label_do/#delete',
    alias: 'delete',
  },
  modifyEmailLabel: {
    href: '/label/modify',
    method: 'post',
    desc: 'List of returned labels (batchQuery)',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/label_do/#modify',
    alias: 'update',
  },
};
