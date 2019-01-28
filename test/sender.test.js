'use strict';

const Request = require('request');
const SendCloudEmail = require('../');
const expect = require('chai').expect;
const sinon = require('sinon');

const options = {
  apiKey: 'fake.key',
  apiUser: 'fake.user',
};

describe('Sending Email Test', () => {
  
  before(() => {
    this.post = sinon.stub(Request, 'post');
  });
  
  after(() => {
    sinon.restore();
  });
  
  it('should failed if given nothing', async () => {
    const sce = new SendCloudEmail(options);
    await sce.sender.send(null)
      .catch(e => {
        expect(e).to.be.an('error');
        expect(e.message.startsWith('opts must be an object')).to.be.true;
      });
  });

  it('should success with correct parameters', async () => {
    let config = {};
    try {
      config = require('../.config.json');
    } catch (e) {
      console.info('config file cannot load from local');
      config.apiKey = 'fake.key';
      config.apiUser = 'fake.user';
      this.post.yields(null, {body: {
        result: true,
        statusCode: 200,
        info: {emailIdList: []},
      }}, null);
    }
    const sce = new SendCloudEmail(config);
    return await sce.sender.send({
      to: 'better.sunjian@gmail.com',
      subject: 'sdk test mail',
      html: 'hello danielssssss !!! this is a test case from test code',
    }).then(res => {
      expect(res.body).to.be.an('object');
      expect(res.body.result).to.be.true;
      expect(res.body.statusCode).to.equals(200);
      expect(res.body.info).that.to.have.property('emailIdList');
      sinon.restore();
      return null;
    });
  });
});
