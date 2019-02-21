'use strict';

const expect = require('chai').expect;

const {
  decomposeAddress,
  addressParser,
} = require('..');

describe('Parser Utilities Test', () => {
  it('should call decomposeAddress got null if given null', async () => {
    const object = decomposeAddress(null);
    expect(object).to.be.null;
  });
  it('should call decomposeAddress got null if given undefined', async () => {
    const object = decomposeAddress(undefined);
    expect(object).to.be.null;
  });
  it('should call decomposeAddress got null if given empty', async () => {
    const object = decomposeAddress('');
    expect(object).to.be.null;
  });
  
  it('should call decomposeAddress got null if given invalid string', async () => {
    const object = decomposeAddress('asdadasd@saddad.com');
    expect(object).to.be.null;
  });
  
  it('should call decomposeAddress success', async () => {
    const object = decomposeAddress('Tester_Team<tester@test.com>');
    expect(object).to.be.an('object');
    expect(object.name).to.equals('Tester_Team');
    expect(object.address).to.equals('tester@test.com');
  });
  
  it('should call addressParse failed if given null', async () => {
    expect(addressParser(null)).to.be.null;
  });
  
  it('should call addressParse failed if given undefined', async () => {
    expect(addressParser(undefined)).to.be.undefined;
  });
  
  it('should call addressParse failed if given empty', async () => {
    expect(addressParser('')).to.equals('');
  });
  
  it('should call addressParse success with array', async () => {
    const addr1 = ['test1@test.com', 'test2@test.com'];
    expect(addressParser(addr1)).to.equals(addr1.join(';'));
  });
  
  it('should call addressParse failed if tag does not given', async () => {
    const addr2 = 'test1@test.com, test2@test.com,         test3@test.com';
    // not changed
    expect(addressParser(addr2)).to.equals(addr2);
  });
  
  it('should call addressParse success with string', async () => {
    const addr2 = 'test1@test.com, test2@test.com,         test3@test.com';
    expect(addressParser(addr2, ',')).to.equals(
      addr2.split(',').map(x => x.trim()).join(';')
    );
  });
  
});
