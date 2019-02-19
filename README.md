[![Build Status](https://travis-ci.org/danielsss/mail-sc.js.svg?branch=master)](https://travis-ci.org/danielsss/mail-sc.js)

A wrapped email sdk for [SendCloud](https://www.sendcloud.net) 

## Installation
```shell
npm i --save mail-sc.js
```

## How to use ?
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

* `apiKey` - The send cloud apiKey
* `apiUser` - The send cloud apiUser
* `host` - The hostname of send cloud api `default`: api.sendcloud.net
* `protocol` - http|https `default`: http
* `port` - `default`: 80
* `retry` - `default`: 1

* `proxy` - axios proxy `default`: null
* `timeout` - axios timeout `default`: 1000 * 6

## Contents of SendCloud

+ **.send(Object)** - [Regular delivery](http://www.sendcloud.net/doc/en/email_v2/send_email/#regular-delivery)
+ **.sendTemplate(Object)** - [Template delivery](http://www.sendcloud.net/doc/en/email_v2/send_email/#template-delivery)
+ **.sendCalendar(Object)** - [Send meeting calendar](http://www.sendcloud.net/doc/en/email_v2/send_email/#send-meeting-calendar)
+ **.taskInfo(Object)** - [List task info](http://www.sendcloud.net/doc/en/email_v2/send_email/#http-request-method)
