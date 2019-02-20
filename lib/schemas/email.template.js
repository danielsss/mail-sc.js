'use strict';

module.exports = {
  batchQuery: {
    method: 'post',
    href: '/template/list',
    desc: 'Basic information of returned email template',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/template_do/#query-batch-query',
    alias: 'batchQuery',
  },
  query: {
    method: 'post',
    href: '/template/get',
    desc: 'Detailed information of returned email template',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/template_do/#query',
    alias: 'query',
  },
  add: {
    method: 'post',
    href: '/template/add',
    desc: 'Adding template to sendCloud',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/template_do/#add',
    alias: 'add',
  },
  delete: {
    method: 'post',
    href: '/template/delete',
    desc: 'Deleting email template from sendCloud',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/template_do/#query-batch-query',
    alias: 'delete',
  },
  modification: {
    method: 'post',
    href: '/template/update',
    desc: 'Name, content, subject and type of the template can be modified.',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/template_do/#modification',
    alias: 'update',
  },
};
