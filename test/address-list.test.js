'use strict';

const expect = require('chai').expect;
const addressListSchema = require('../lib/schemas/addr.list');
const AddressList = require('../lib/addr.list');
const SendCloud = require('..');
const config = require('./fixtures/config');

describe.only('Address List Test', () => {
  it('should have methods which is defined in schemas', async () => {
    const keys = Object.keys(addressListSchema);
    const sce = new SendCloud(config);
    expect(sce.addressList.__proto__ === AddressList.prototype).to.be.true;
    for (const key of keys) {
      expect(sce.addressList).to.have.property(key);
    }
  });

  it('should success to access http://api.sendcloud.net/apiv2/addresslist/list', async () => {
    const sce = new SendCloud(config);
    const result = await sce.addressList.list({});
    const { body } = result;
    expect(body.result).to.be.true;
    expect(body.statusCode).to.equals(200);
    expect(body).to.have.property('info');
  });
});
