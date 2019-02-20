'use strict';

module.exports = {
  batchQueryAddressList: {
    href: '/addresslist/list',
    method: 'post',
    desc: 'Query address list (batch query)',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/',
    alias: 'batchQueryAddress',
  },
  addAddressList: {
    href: '/addresslist/add',
    method: 'post',
    desc: 'Adding address to list',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#add-address-list',
    alias: 'addAddress',
  },
  deleteAddressList: {
    href: '/addresslist/delete',
    method: 'post',
    desc: 'Deleting address list',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-address-list',
    alias: 'deleteAddress',
  },
  modifyAddressList: {
    href: '/addresslist/update',
    method: 'post',
    desc: 'Modify address list or update address list',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-address-list',
    alias: 'updateAddress',
  },
  
  batchQueryListMember: {
    href: '/addressmember/list',
    method: 'post',
    desc: 'Query list member (batch query)',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member-batch-query',
    alias: 'batchQueryMember',
  },
  queryListMember: {
    href: '/addressmember/get',
    method: 'post',
    desc: 'Query list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member',
    alias: 'queryMember',
  },
  addListMember: {
    href: '/addressmember/add',
    method: 'post',
    desc: 'Add list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#add-list-member',
    alias: 'addMember',
  },
  modifyListMember: {
    href: '/addressmember/update',
    method: 'post',
    desc: 'Modify list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-list-member',
    alias: 'updateMember',
  },
  deleteListMember: {
    href: '/addressmember/delete',
    method: 'post',
    desc: 'Delete list member',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-list-member',
    alias: 'deleteMember',
  },
};
