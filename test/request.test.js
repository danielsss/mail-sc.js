'use strict';

const expect = require('chai').expect;
const SendCloud = require('../');

describe('Request Test', () => {
  it('/apiv2/mail/send', async () => {
    const options = {
      from: 'support@test.com',
      to: 'test@test.com',
      subject: 'test subject',
      text: 'test text'
    };

    const sendCloud = new SendCloud({apiKey: 'fake', apiUser: 'fake'});
    const res = await sendCloud.send(options);
    expect(res).to.have.property('data');
    expect(res.data.result).to.equals(false);
    expect(res.data.statusCode).to.be.an('number');
    expect(res.data.message.length).to.greaterThan(0);
  });
});