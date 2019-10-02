// const isPrime = num => {
// 	for (let i = 2; i < num; i++) if (num % i === 0) return false;
// 	return num !== 1;
// };

// const primes = num => [...Array(num + 1).keys()].filter(isPrime);

// const sumPrimes = num => primes(num).reduce((current, prev) => current + prev);

// // TEST
// sumPrimes(10);


// function sumPrimes(num) {
//     // step 1	
//     let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
//     // step 2
//     let onlyPrimes = arr.filter( (n) => { 
//       let m = n-1;
//       while (m > 1 && m >= Math.sqrt(n)) { 
//         if ((n % m) === 0) 
//           return false;
//           m--;
//       }
//         return true;
//     });
//     // step 3
//     return onlyPrimes.reduce((a,b) => a+b); 
//   }
//   // test here
//   sumPrimes(977);