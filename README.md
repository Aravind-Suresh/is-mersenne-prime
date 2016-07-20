# is-mersenne-prime

Checks if the given number is a [Mersenne prime number](https://en.wikipedia.org/wiki/Mersenne_prime) or not.

## Install

```
$ npm install is-mersenne-prime
```

## Usage

```
var isMersennePrime = require('is-mersenne-prime');

isMersennePrime(31);    // => true

isMersennePrime(127);   // => true

isMersennePrime(29);    // => false

isMersennePrime(104);   // => false

```

## Tests

```
$ npm test
```
