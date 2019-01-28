'use strict';

const expect = require('chai').expect;
const SendCloudEmail = require('../');

describe('Entries Test', () => {
  it('should have error if apiKey does not given', async () => {
    try {
      new SendCloudEmail({});
    } catch (e) {
      expect(e).to.be.an('error');
      expect(e.message.startsWith('You must specify the apiKey')).to.be.true;
    }
  });

  it('should have error if apiUser does not given', async () => {
    try {
      new SendCloudEmail({apiKey: 'fake.key'});
    } catch (e) {
      expect(e).to.be.an('error');
      expect(e.message.startsWith('You must specify the apiUser')).to.be.true;
    }
  });

  it('should get instance of SendCloudEmail success', async () => {
    const sce = new SendCloudEmail({apiKey: 'fake.key', apiUser: 'fake.user'});
    expect(sce.__proto__ === SendCloudEmail.prototype).to.be.true;
  });
});
