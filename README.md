[![Build Status](https://travis-ci.org/danielsss/mail-sc.js.svg?branch=master)](https://travis-ci.org/danielsss/mail-sc.js)

# mail-sc.js

To direct email based on SendCloud platform https://www.sendcloud.net/

# install
```js
npm i --save mail-sc.js
```

# how to use ?
```js
const SendCloud = require('mail-sc.js');
const options = {apiKey: 'your key', apiUser: 'your user'};
const sendCloud = new SendCloud(options);

const message = {from: '', to: '', subject: '', text: ''};
await sendCloud.send(message);
```

# documents
* Preparing ...
