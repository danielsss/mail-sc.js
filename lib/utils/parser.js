'use strict';

/**
 * @description Normalizing email address by ';'
 * @param {Array|String} addresses
 * @param {String} tag
 * @return {String}
 */
const addressParser = function(addresses, tag) {
  if (Array.isArray(addresses)) {
    return addresses.join(';');
  } else if (typeof addresses === 'string' && tag) {
    const addressesArray = addresses.split(tag).map(v => v.trim());
    return addressesArray.join(';');
  }
  return addresses;
};


/**
 * @description decompose a normalized email address
 * @param {String} address
 * @return {{name: String, address: String} | null}
 */
const decomposeAddress = function(address) {
  if (!address || typeof address !== 'string') return null;
  if (!address.includes('<') ||
    !address.includes('>')) {
    return null;
  }
  
  const arr = address.split('<');
  return {
    name: arr[0],
    address: arr[1].slice(0, arr[1].length - 1),
  };
};

module.exports = exports = {
  decomposeAddress,
  addressParser,
};
