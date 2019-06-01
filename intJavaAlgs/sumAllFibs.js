// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num < 0){
     return -1;
  }

  if (num === 0 || num === 1){
    return 1;
  }

  var oddFibNum = [1, 1];
  var fibNum1 = 1;
  var fibNum2 = 1;
  var fibSum = 0;


  for (var i = 0; fibNum1 <= num; i++){
      fibSum = fibNum1 + fibNum2;
      fibNum1 = fibNum2;
      fibNum2 = fibSum;
      
      if (fibSum % 2 !== 0){
        oddFibNum.push(fibSum);
      }      
  }

  return oddFibNum.reduce((acc, curr) => {
    return acc + curr;
  });
}

sumFibs(10);


  //for
  //num1 + num = num1
  //}
  //push
  //add     
//   numbers.reduce(
//     ( accumulator, currentValue ) => accumulator + currentValue,
//     );