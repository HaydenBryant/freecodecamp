function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var newArr = arr2.slice();

  arr1.forEach(elem => {
    newArr.splice(n, 0, elem);
    n++;
  });

  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
