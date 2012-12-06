function sieve(number) {
  var result = []
  result.push(0)
  result.push(0)
  for (var i = 0; i<=number-2; i++) result.push(1)

  for (var i = 2; i<Math.ceil(Math.sqrt(number)); i++) {
    if (result[i]) {
      for (var j = 2*i; j <= number; j += i) {
        result[j] = 0
      }
    }
  }
  return result
}

function getPrimes(number) {
  var primeSieve = sieve(number)
  var primes = []
  for (var i = 2; i<=number; i++) {
    if (primeSieve[i]) primes.push(i)
  }
  return primes
}

exports.sieve = sieve
exports.getPrimes = getPrimes
