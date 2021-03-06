// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function nthPrime(n) {
  var primes = [2, 3, 5, 7, 11, 13];

  var testNum = 15;
  var prime = true;

  while (primes.length < n){
      
      for (let i = 0; primes[i] <= Math.sqrt(testNum) ;i++){
          if(testNum%primes[i] === 0) {
            prime = false;
            break;
          }
        }

      if (prime === true){
          primes.push(testNum)
          testNum+=2
      } else {
          prime = true
          testNum += 2
      }
  }
  return primes[primes.length - 1]
}

nthPrime(10001);


// function nthPrime(n) {
//   var primes = [2, 3, 5, 7, 11, 13];

//   var testNum = 15;
//   var prime = true;

//   while (primes.length < n){
      
//       for (let i = 0; primes[i] <= Math.sqrt(testNum) ;i++){
//           if(testNum%primes[i] === 0) {
//             prime = false;
//             break;
//           }
//         }

//       if (prime) primes.push(testNum);
//       prime = true;
//       testNum+=2
//   }
//   return primes[primes.length - 1]
// }