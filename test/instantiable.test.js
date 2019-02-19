'use strict';

const expect = require('chai').expect;
const SendCloud = require('../');

describe('SendCloud Instantiable Test', () => {
  it('should throw out an error if apiKey does not given', async () => {
    try {
      new SendCloud({});
    } catch (e) {
      expect(e).to.be.an('error');
    }
  });
  
  it('should throw out an error if apiUser does not given', async () => {
    try {
      new SendCloud({apiKey: 'fake.key'});
    } catch (e) {
      expect(e).to.be.an('error');
    }
  });
});