var sieve = require('./index.js').sieve
    , getPrimes = require('./index.js').getPrimes
    , assert = require('assert')

var expectedResult = [0,0,1,1,0,1,0,1,0,0,0]
assert.deepEqual(expectedResult, sieve(10), "sieve up to 10 failed")

expectedResult.push(1,0,1,0,0,0,1,0,1,0)
assert.deepEqual(expectedResult, sieve(20), "sieve up to 20 failed")

expectedResult.push(0,0,1,0,0,0,0,0,1,0)
assert.deepEqual(expectedResult, sieve(30), "sieve up to 30 failed")

console.log('sieve tests completed successfully!')

expectedResult = [2,3,5,7]
assert.deepEqual(expectedResult, getPrimes(10), "primes up to 10 failed")

expectedResult.push(11,13,17,19)
assert.deepEqual(expectedResult, getPrimes(20), "primes up to 20 failed")

expectedResult.push(23,29)
assert.deepEqual(expectedResult, getPrimes(30), "primes up to 30 failed")

console.log('prime tests completed successfully')
