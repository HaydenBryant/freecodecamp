function smallestCommons(arr) {
  var newArr = [];

  if(arr[0] > arr[1]){
    for(var i = arr[0]; i >= arr[1]; i--){
      newArr.push(i);
    }
  } else {
    for(var i = arr[1]; i >= arr[0]; i--){
      newArr.push(i);
    }
  }

  for(i = 0; i < newArr.length; i++){
    var test = newArr[i] * newArr[(i + 1)]
    for(var j = 0; j < newArr.length; j++){
      if(newArr[j] % test !== 0){
        break;
      }
    }
  }
    console.log(test);
  }
  smallestCommons([1,5]);