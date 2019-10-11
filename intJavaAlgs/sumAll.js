function sumAll(arr) {
  var sum = 0;
  
  if(arr[0] > arr[1]){
    for(var i = arr[1]; i <= arr[0]; i++){
      sum += i;
    }
  } else if(arr[1] > arr[0]){
    for(var i = arr[0]; i <= arr[1]; i++){
      sum += i;
    }
  }

  return (sum);
}

sumAll([1, 4]);