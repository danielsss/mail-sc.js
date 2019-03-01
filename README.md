# mail-sc.js

[![Build Status](https://travis-ci.org/danielsss/mail-sc.js.svg?branch=master)](https://travis-ci.org/danielsss/mail-sc.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/070f009b8eab447b83b6b3ab2ef8b531)](https://www.codacy.com/app/danielsss/mail-sc.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=danielsss/mail-sc.js&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/070f009b8eab447b83b6b3ab2ef8b531)](https://www.codacy.com/app/danielsss/mail-sc.js?utm_source=github.com&utm_medium=referral&utm_content=danielsss/mail-sc.js&utm_campaign=Badge_Coverage)

A wrapped email sdk for [SendCloud](https://www.sendcloud.net) 

Welcome PRs.

## Requirements
* Node.js > v7.0.*

## Dependencies
* axios
* debug


## Installation
```shell
npm i --save mail-sc.js
```

## Usage

#### Example 1: [Recommended. See APIs](#aliases)
```js
const {
  createClient, decomposeAddress, addressParser
} = require('mail-sc.js');
const options = {apiKey: 'your key', apiUser: 'your user'};
const sendCloud = createClient(options);

const address = 'tester<test_address@test.com>';
const decomposed = decomposeAddress(address);

const addr1 = ['test1@test.com', 'test2@test.com'];
const addr2 = 'test1@test.com, test2@test.com,         test3@test.com';

console.log(addressParser(addr1));
// 'test1@test.com;test2@test.com'

console.log(addressParser(addr2, ','));
// 'test1@test.com;test2@test.com;test3@test.com'

const message = {
  from: decomposed.address,
  fromName: decomposed.name,
  to: 'test1@test,com',
  subject: 'test subject',
  html: 'test message'
};
const sendMessage = async () => {
  return await sendCloud.delivery.send(message);
}
sendMessage();
```

#### Example 2
```js
const {
  SendCloud, decomposeAddress
} = require('mail-sc.js');
const options = {apiKey: 'your key', apiUser: 'your user'};
const sendCloud = new SendCloud(options);

const address = 'tester<test_address@test.com>';
const decomposed = decomposeAddress(address);

const message = {
  from: decomposed.address,
  fromName: decomposed.name,
  to: 'test1@test,com',
  subject: 'test subject',
  html: 'test message'
};
const sendMessage = async () => {
  return await sendCloud.send(message);
}

sendMessage();
```

## SendCloud Options

* `apiKey` - The send cloud apiKey
* `apiUser` - The send cloud apiUser
* `host` - The hostname of send cloud api \[`default`: api.sendcloud.net]
* `protocol` - http|https \[`default`: http]
* `port` - \[`default`: 80]
* `retry` - \[`default`: 1]
* `proxy` - axios proxy \[`default`: null]
* `timeout` - axios timeout \[`default`: 1000 * 6]

## Methods of `SendCloud`

#### Deliveries

+ **delivery.send(Object)** - [Regular delivery](http://www.sendcloud.net/doc/en/email_v2/send_email/#regular-delivery)
+ **delivery.sendTemplate(Object)** - [Template delivery](http://www.sendcloud.net/doc/en/email_v2/send_email/#template-delivery)
+ **delivery.sendCalendar(Object)** - [Send meeting calendar](http://www.sendcloud.net/doc/en/email_v2/send_email/#send-meeting-calendar)
+ **delivery.taskInfo(Object)** - [List task info](http://www.sendcloud.net/doc/en/email_v2/send_email/#http-request-method)

#### Email Template

+ **template.batchQuery(Object)** - [Basic information of returned email template](http://www.sendcloud.net/doc/en/email_v2/template_do/#query-batch-query)
+ **template.query(Object)** - [Detailed information of returned email template](http://www.sendcloud.net/doc/en/email_v2/template_do/#query)
+ **template.add(Object)** - [Adding template to sendCloud](http://www.sendcloud.net/doc/en/email_v2/template_do/#add)
+ **template.delete(Object)** - [Deleting email template from sendCloud](http://www.sendcloud.net/doc/en/email_v2/template_do/#query-batch-query)
+ **template.update(Object)** - [Name, content, subject and type of the template can be modified.](http://www.sendcloud.net/doc/en/email_v2/template_do/#modification)

#### Address List

+ **addressList.batchQueryAddress(Object)** - [Query address list (batch query)](http://www.sendcloud.net/doc/en/email_v2/list_do/)
+ **addressList.addAddress(Object)** - [Adding address to list](http://www.sendcloud.net/doc/en/email_v2/list_do/#add-address-list)
+ **addressList.deleteAddress(Object)** - [Deleting address list](http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-address-list)
+ **addressList.updateAddress(Object)** - [Modify address list or update address list](http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-address-list)
+ **addressList.batchQueryMember(Object)** - [Query list member (batch query)](http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member-batch-query)
+ **addressList.queryMember(Object)** - [Query list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member)
+ **addressList.addMember(Object)** - [Add list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#add-list-member)
+ **addressList.updateMember(Object)** - [Modify list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-list-member)
+ **addressList.deleteMember(Object)** - [Delete list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-list-member)

#### Email Label

+ **emailLabel.batchQuery(Object)** - [List of returned labels (batchQuery)](http://www.sendcloud.net/doc/en/email_v2/label_do/#query-batch-query)
+ **emailLabel.getLabel(Object)** - [Get one label by labelId](http://www.sendcloud.net/doc/en/email_v2/label_do/#query)
+ **emailLabel.add(Object)** - [Adding label](http://www.sendcloud.net/doc/en/email_v2/label_do/#add)
+ **emailLabel.delete(Object)** - [Deleting email label by id](http://www.sendcloud.net/doc/en/email_v2/label_do/#delete)
+ **emailLabel.update(Object)** - [List of returned labels (batchQuery)](http://www.sendcloud.net/doc/en/email_v2/label_do/#modify)



## Planning implementations

#### SendCloud APIs
- [x] Deliveries - `2019-02-15`
- [x] Email Template - `2019-02-21`
- [x] Address List - `2019-02-21`
- [x] Email Label - `2019-03-1`
- [ ] Domain
- [ ] API_USER
- [ ] User Information
- [ ] Statistics
- [ ] Delivery Response
- [ ] Bounce List Management
- [ ] Unsubscribe Management
- [ ] Spam Report Management
- [ ] Lists of Opens And Clicks Management

#### Build-in utilities
- [x] .addressParser(addresses, tag) - Normalizing email address list or email string list
- [x] .decomposeAddress(address) - Decomposing an email address into fromName & address 

* [See details for utilities usage](#example-1-recommended-see-apisaliases)

## LICENCE
MIT License

Copyright (c) 2018 Danielsss

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
