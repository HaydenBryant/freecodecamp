// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function generateFibonacci(num) {
  if (num < 0) return -1;
  else if (num === 0 || num === 1) return 1;

  const fibonacciArray = [1, 1];
  var fibonacciNumber = 0;

  while((fibonacciNumber = fibonacciArray[0] + fibonacciArray[1]) <= num) {
    fibonacciArray.unshift(fibonacciNumber);
  }

}

function sumOddFibs(fibonacciArray){
  return fibonacciArray.filter(fib % 2 !== 0).reduce((accumulator, currentValue) => accumulator + currentValue);
}

generateFibonacci(10);
sumOddFibs(fibonacciArray);


//   var oddfibonacciNumber = [1, 1];
//   var fibonacciNumber1 = 1;
//   var fibonacciNumber2 = 1;
//   var fibSum = 0;

//   for (var i = 0; fibSum <= num; i++) {
//     if (fibSum % 2 !== 0) {
//       oddfibonacciNumber.push(fibSum);
//     }
//     fibSum = fibonacciNumber1 + fibonacciNumber2;
//     fibonacciNumber1 = fibonacciNumber2;
//     fibonacciNumber2 = fibSum;
//   }

//   return oddfibonacciNumber.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
// }

// sumFibs(10);

//for
//num1 + num = num1
//}
//push
//add
// numbers.reduce(
//   ( accumulator, currentValue ) => accumulator + currentValue,
//   );

// function to return array of fibonacci numbers
// function to sum odd numbers of the array
// .filter.reduce
