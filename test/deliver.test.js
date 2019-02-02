'use strict';

const SendCloudEmail = require('../');
const expect = require('chai').expect;
const sinon = require('sinon');

let config = {};
try {
  config = require('../.config');
} catch (e) {
  console.error('local config not found then use global env');
  console.error('import error:', e);
}

if (!config.apiKey) config.apiKey = process.env.API_KEY;
if (!config.apiUser) config.apiUser = process.env.API_USER;
if (!config.from) config.from = process.env.FROM;


const options = {
  apiKey: 'fake.key',
  apiUser: 'fake.user',
};

describe('Deliveries Test', () => {
  it('should failed if given nothing', async () => {
    const sce = new SendCloudEmail(options);
    return await sce.deliver.send(null)
      .catch(e => {
        expect(e).to.be.an('error');
        expect(e.message.startsWith('opts must be an object')).to.be.true;
        return null;
      });
  });

  it('should call send() success with correct parameters', async () => {
    const sce = new SendCloudEmail(config);
    return await sce.deliver.send({
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

  it('should have an error if maillistTaskId does not given', async () => {
    const sce = new SendCloudEmail(config);
    return await sce.deliver.taskInfo({})
      .catch(err => {
        expect(err).to.be.an('error');
        expect(err.message.startsWith('Missing maillistTaskId')).to.be.true;
      });
  });

  it('should call taskInfo() success with correct parameters', async () => {
    const sce = new SendCloudEmail(config);
    return await sce.deliver.taskInfo({maillistTaskId: 1})
      .then(res => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('result');
        expect(res.body).to.have.property('statusCode');
      });
  });
});
