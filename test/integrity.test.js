'use strict';

const expect = require('chai').expect;
const {SendCloud, createClient} = require('../');
const deliveries = require('../lib/schemas/deliveries');
const emailTemplate = require('../lib/schemas/email.template');
const addressList = require('../lib/schemas/address.list');


const schemas = [
  deliveries,
  emailTemplate,
  addressList,
];

describe('Integrity Test', () => {
  const options = {
    apiKey: 'fake',
    apiUser: 'fake'
  };
  const sendCloud = new SendCloud(options);
  for (const schema of schemas) {
    for (const name in schema) {
      it('SendCloud should have method: ' + name, async () => {
        expect(sendCloud).to.have.property(name).that.to.be.an('function');
        expect(SendCloud.prototype).to.have.property(name).that.to.be.an('function');
      });
    }
  }
  
  const client = createClient(options);
  it('client should have some proxy properties', async () => {
    expect(client).to.have.property('delivery');
    expect(client).to.have.property('template');
    expect(client).to.have.property('addressList');
  });
  
  
});
