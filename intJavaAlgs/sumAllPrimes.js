// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.



// function sumPrimes(num) {
//     if (num < 2) return 0;
//     else if (num === 2) return 2;

//     var primeNums = [2];

//     for (var i = 3; i <= num; i++) {
//         var prime = true;
//         for (var j = 0; j < primeNums.length; j++) {
//             if (i % primeNums[j] === 0) {
//                 prime = false;
//             }
//         }
//         if (prime === true) {
//             primeNums.push(i);
//         }
//     }
//     var sumAll = 0;
    
//     primeNums.map(nums => sumAll += nums);
    
//     return sumAll;
// }

// sumPrimes(10);

// function generatePrimes(num) {
//     if (num < 2) return 0;
//     else if (num === 2) return 2;

//     var primeNums = [2];

//     for (var i = 3; i <= num; i++) {
//         if(primeNums.filter(i % num !== 0).length === primeNums.length){
//             primeNums.push(i);
//         }
//     }
// 	return primeNums;
// }

// const sumPrimes = (maxPrime) => {generatePrimes(maxPrime).reduce((current, prev) => current + prev)}

// sumPrimes(10);



const generatePrimes = (num) => {
    var primeNums = [2];

    for (var i = 3; i <= num; i++) {
        if(primeNums.filter(num => i % num !== 0).length === primeNums.length){
            primeNums.push(i);
        }
    }
	return primeNums;
}

const sumPrimes = (maxPrime) => generatePrimes(maxPrime).reduce((a, b) => a + b)

sumPrimes(10);