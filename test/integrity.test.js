'use strict';

const expect = require('chai').expect;
const {SendCloud, createClient} = require('../');
const deliveries = require('../lib/schemas/deliveries');
const emailTemplate = require('../lib/schemas/email.template');
const addressList = require('../lib/schemas/address.list');
const emailLabel = require('../lib/schemas/email.label');

const schemas = [
  deliveries,
  emailTemplate,
  addressList,
  emailLabel,
];

const options = {apiKey: 'fake',apiUser: 'fake'};

describe('Integrity Test', () => {
  const sendCloud = new SendCloud(options);
  for (const schema of schemas) {
    for (const name in schema) {
      it('SendCloud should have method: ' + name, async () => {
        expect(sendCloud).to.have.property(name).that.to.be.a('function');
        expect(SendCloud.prototype).to.have.property(name).that.to.be.a('function');
      });
    }
  }
  
  
});

describe('Proxy Properties Test', () => {
  const client = createClient(options);
  it('client should have some proxy properties', async () => {
    expect(client).to.have.property('delivery');
    expect(client).to.have.property('template');
    expect(client).to.have.property('addressList');
    expect(client).to.have.property('emailLabel');
  });

  makeMoreTestCaseBySchemaName(deliveries, 'delivery', client);
  makeMoreTestCaseBySchemaName(emailTemplate, 'template', client);
  makeMoreTestCaseBySchemaName(addressList, 'addressList', client);
  makeMoreTestCaseBySchemaName(emailLabel, 'emailLabel', client);
  function makeMoreTestCaseBySchemaName(schema, name, client) {
    for (const key in schema) {
      const alias = schema[key].alias;
      it('should proxied the property: ' + `${name}.${alias}`, async () => {
        expect(client[name]).to.have.property(alias).that.to.be.a('function');
      });
    }
  }
});


