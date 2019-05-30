function sumFibs(num) {
    var fibNum1 = 1;
    var fibNum2 = 2;
    var fibSum = 0;

    for (var i = 1; i <= n; i++) {
        fibSum = fibNum1 + fibNum2;
        fibNum1 = fibNum2;
        fibNum2 = fibSum;

    }

    return num;
}

sumFibs(4);


  //for
  //num1 + num = num1
  //}
  //push
  //add     
//   numbers.reduce(
//     ( accumulator, currentValue ) => accumulator + currentValue,
//     );