'use strict';

module.exports = {
  send: {
    method: 'post',
    href: '/mail/send',
    desc: 'Regular delivery',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/send_email/#regular-delivery',
    alias: 'send',
  },
  sendTemplate: {
    method: 'post',
    href: '/mail/sendtemplate',
    desc: 'Template delivery',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/send_email/#template-delivery',
    alias: 'sendTemplate',
  },
  sendCalendar: {
    method: 'post',
    href: '/mail/sendcalendar',
    desc: 'Send meeting calendar',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/send_email/#send-meeting-calendar',
    alias: 'sendCalendar',
  },
  taskInfo: {
    method: 'post',
    href: '/mail/taskinfo',
    desc: 'List task info',
    doc: 'http://www.sendcloud.net/doc/en/email_v2/send_email/#http-request-method',
    alias: 'taskInfo',
  },
};
