function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])){
        }else{
            newArr.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])){
        }else{
            newArr.push(arr2[i])
        }
    }
    return newArr;
  }
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);