'use strict';

const expect = require('chai').expect;
const {SendCloud, createClient} = require('../');
const sinon = require('sinon');

describe('Request Test', () => {
  it('/apiv2/mail/send - new SendCloud()', async () => {
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
  
  it('/apiv2/mail/send - createClient()', async () => {
    const options = {
      from: 'support@test.com',
      to: 'test@test.com',
      subject: 'test subject',
      text: 'test text'
    };
    
    const client = createClient({apiKey: 'fake', apiUser: 'fake'});
    const res = await client.delivery.send(options);
    expect(res).to.have.property('data');
    expect(res.data.result).to.equals(false);
    expect(res.data.statusCode).to.be.an('number');
    expect(res.data.message.length).to.greaterThan(0);
  });
  
  it('should got ReferenceError if does not found property', async () => {
    const client = createClient({apiKey: 'fake', apiUser: 'fake'});
    try {
      await client.a.batchQueryListMember();
    } catch (e) {
      expect(e).to.be.an('error');
    }
  });

  it('should call .send() success with correct response body', async () => {
    const {SendCloud} = require('../');
    const response = {
      result: true,
      statusCode: 200,
      message: '请求成功',
      info: {
        emailIdList: ['1550673526229_107473_25498_2728.sc-10_9_4_40-inbound0$better.sunjian@gmail.com']
      }
    };
    sinon.stub(SendCloud.prototype, 'send').callsFake(async => response);
    const client = createClient({apiKey: 'fake', apiUser: 'fake'});
    const options = {
      from: 'support@test.com',
      to: 'test@test.com',
      subject: 'test subject',
      text: 'test text'
    };
    const data = await client.delivery.send(options);
    expect(data).to.be.an('object');
    for (const key in response) {
      expect(data[key]).to.equals(response[key]);
    }
    sinon.restore();
  });

  it('should make a request but does not retry if request failed', async () => {
    const client = createClient({apiKey: 'fake', apiUser: 'fake', retry: -1});
    const options = {
      from: 'support@test.com',
      to: 'test@test.com',
      subject: 'test subject',
      text: 'test text'
    };

    const res = await client.delivery.send(options);
    expect(res).to.be.an('object');
    expect(res.data.result).to.equals(false);
    expect(res.data.statusCode).to.greaterThan(0);
  });

  it('should try multiple request if response.status !== 200', async () => {
    const client = createClient({apiKey: 'fake', apiUser: 'fake', retry: 1});
    const options = {
      from: 'support@test.com',
      to: 'test@test.com',
      subject: 'test subject',
      text: 'test text'
    };

    const res = await client.delivery.send(options);
    expect(res).to.be.an('object');
    expect(res.data.result).to.equals(false);
    expect(res.data.statusCode).to.greaterThan(0);
  });

  it('should failed if given an invalid hostname', async () => {
    const client = createClient({
      apiKey: 'fake',
      apiUser: 'fake',
      retry: 2,
      host: 'api.xxxx123xxxx.net',
      timeout: 1000,
    });
    const options = {
      from: 'support@test.com',
      to: 'test@test.com',
      subject: 'test subject',
      text: 'test text'
    };

    try {
      await client.delivery.send(options);
    } catch (e) {
      console.info(e);
      expect(e.code).to.equals('ECONNRESET');
    }
  });
});
