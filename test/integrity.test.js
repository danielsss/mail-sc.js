'use strict';

const expect = require('chai').expect;
const SendCloud = require('../');
const deliveries = require('../lib/schemas/deliveries');

describe('Integrity Test', () => {
  const options = {
    apiKey: 'fake',
    apiUser: 'fake'
  };
  const sendCloud = new SendCloud(options);
  for (const name in deliveries) {
    it('SendCloud instance should have method ' + name, async () => {
      expect(sendCloud).to.have.property(name).that.to.be.an('function');
      expect(SendCloud.prototype).to.have.property(name).that.to.be.an('function');
    });
  }
});
