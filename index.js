'use strict';

var numberIsInteger = require('number-is-integer');
var isPrime = require('is-prime');

/**
 * [isMersennePrime Checks whether the given number is a mersenne prime or not]
 * @param  {[type]}  num Given number
 * @return {Boolean}     Whether num is a mersenne prime or not
 */
function isMersennePrime(num) {
  if (Math.sqrt(num + 1) % 1 === 0) {
    return isPrime(num);
  }
  return false;
}

exports = function(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Expected a number');
  }
  if (n <= 0) {
    throw new Error('The given number must be a positive integer');
  }
  if (!numberIsInteger(n)) {
    throw new Error('The given number must an integer');
  }
  return isMersennePrime(n);
}
