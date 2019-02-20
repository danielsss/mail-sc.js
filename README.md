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
```js
const SendCloud = require('mail-sc.js');
const options = {apiKey: 'your key', apiUser: 'your user'};
const sendCloud = new SendCloud(options);

const message = {from: '', to: '', subject: '', text: ''};
const sendMessage = async () => {
  return await sendCloud.send(message);
}

sendMessage();
```

## Options of SendCloud

`apiKey` - The send cloud apiKey<br>
`apiUser` - The send cloud apiUser<br>
`host` - The hostname of send cloud api \[`default`: api.sendcloud.net]<br>
`protocol` - http|https \[`default`: http]<br>
`port` - \[`default`: 80]<br>
`retry` - \[`default`: 1]<br>
`proxy` - axios proxy \[`default`: null]<br>
`timeout` - axios timeout \[`default`: 1000 * 6]<br>

## Methods of SendCloud

#### Deliveries

+ **.send(Object)** -   [Regular delivery](http://www.sendcloud.net/doc/en/email_v2/send_email/#regular-delivery)
+ **.sendTemplate(Object)** -   [Template delivery](http://www.sendcloud.net/doc/en/email_v2/send_email/#template-delivery)
+ **.sendCalendar(Object)** -   [Send meeting calendar](http://www.sendcloud.net/doc/en/email_v2/send_email/#send-meeting-calendar)
+ **.taskInfo(Object)** -   [List task info](http://www.sendcloud.net/doc/en/email_v2/send_email/#http-request-method)

#### Email Template

+ **.batchQuery(Object)**   -   [Basic information of returned email template](http://www.sendcloud.net/doc/en/email_v2/template_do/#query-batch-query)
+ **.query(Object)**    -   [Detailed information of returned email template](http://www.sendcloud.net/doc/en/email_v2/template_do/#query)
+ **.add(Object)**  -   [Adding template to sendCloud](http://www.sendcloud.net/doc/en/email_v2/template_do/#add)
+ **.delete(Object)**   -   [Deleting email template from sendCloud](http://www.sendcloud.net/doc/en/email_v2/template_do/#query-batch-query)
+ **.modification(Object)** -   [Name, content, subject and type of the template can be modified.](http://www.sendcloud.net/doc/en/email_v2/template_do/#modification)

#### Address List

+ **.batchQueryAddressList(Object)**	-	[Query address list (batch query)](http://www.sendcloud.net/doc/en/email_v2/list_do/)
+ **.addAddressList(Object)**	-	[Adding address to list](http://www.sendcloud.net/doc/en/email_v2/list_do/#add-address-list)
+ **.deleteAddressList(Object)**	-	[Deleting address list](http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-address-list)
+ **.modifyAddressList(Object)**	-	[Modify address list or update address list](http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-address-list)
+ **.batchQueryListMember(Object)**	-	[Query list member (batch query)](http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member-batch-query)
+ **.queryListMember(Object)**	-	[Query list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#query-list-member)
+ **.addListMember(Object)**	-	[Add list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#add-list-member)
+ **.modifyListMember(Object)**	-	[Modify list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#modify-list-member)
+ **.deleteListMember(Object)**	-	[Delete list member](http://www.sendcloud.net/doc/en/email_v2/list_do/#delete-list-member)


## Planning implementations

#### SendCloud APIs
- [x] Deliveries
- [x] Email Template
- [x] Address List
- [ ] Email Label
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
- [ ] .addressesParser() - Normalizing email address list or email string list 

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
