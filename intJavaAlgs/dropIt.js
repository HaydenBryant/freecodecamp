function dropElements(arr, func) {
  var array = [];

  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr.slice(i);
    }
  }

  return array;
};

dropElements([1, 2, 3, 4], function(n) {return n > 5;})