'use strict';

module.exports = {
  batchQueryAddressList: {
    href: '/addresslist/list',
    method: 'post',
    desc: 'Query address list (batch query)',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/',
  },
  addAddressList: {
    href: '/addresslist/add',
    method: 'post',
    desc: 'Adding address to list',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#add-address-list',
  },
  deleteAddressList: {
    href: '/addresslist/delete',
    method: 'post',
    desc: 'Deleting address list',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-address-list',
  },
  modifyAddressList: {
    href: '/addresslist/update',
    method: 'post',
    desc: 'Modify address list or update address list',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-address-list',
  },
  
  batchQueryListMember: {
    href: '/addressmember/list',
    method: 'post',
    desc: 'Query list member (batch query)',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member-batch-query',
  },
  queryListMember: {
    href: '/addressmember/get',
    method: 'post',
    desc: 'Query list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member',
  },
  addListMember: {
    href: '/addressmember/add',
    method: 'post',
    desc: 'Add list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#add-list-member',
  },
  modifyListMember: {
    href: '/addressmember/update',
    method: 'post',
    desc: 'Modify list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-list-member',
  },
  deleteListMember: {
    href: '/addressmember/delete',
    method: 'post',
    desc: 'Delete list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-list-member',
  },
};
