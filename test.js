'use strict';

var assert = require('assert');
var isMersennePrime = require('./');

// Mersenne primes
it('should return true because 3 is mersenne prime', function () {
    assert.strictEqual(isMersennePrime(3), true);
});
it('should return true because 7 is mersenne prime', function () {
    assert.strictEqual(isMersennePrime(7), true);
});
it('should return true because 31 is mersenne prime', function () {
    assert.strictEqual(isMersennePrime(31), true);
});
it('should return true because 127 is mersenne prime', function () {
    assert.strictEqual(isMersennePrime(127), true);
});

// Not mersenne primes
it('should return false because 4 is not mersenne prime', function () {
    assert.strictEqual(isMersennePrime(4), false);
});
it('should return false because 10 is not mersenne prime', function () {
    assert.strictEqual(isMersennePrime(10), false);
});
it('should return false because 39 is not mersenne prime', function () {
    assert.strictEqual(isMersennePrime(39), false);
});
it('should return false because 205 is not mersenne prime', function () {
    assert.strictEqual(isMersennePrime(205), false);
});
