// function diffArray(arr1, arr2) {
//   var newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])){
//         }else{
//             newArr.push(arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.includes(arr2[i])){
//         }else{
//             newArr.push(arr2[i])
//         }
//     }
//     return newArr;
//   }
  
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function diffArray(arr1, arr2) {
//     let newArr = [];
//     arr1.forEach (element => {
//         if(!arr2.includes(element)) newArr.push(element)
//     });

//     arr2.forEach (element => {
//         if(!arr1.includes(element)) newArr.push(element)
//     });
//     // Same, same; but different.
//     return newArr;
//   }

  function diffArray(arr1, arr2) {
    var newArr = [];

    arr1.filter(element => !arr2.includes(element)); newArr.push(element)
    arr2.filter(element => !arr1.includes(element)); newArr.push(element)

    return newArr;

  }

//   const diffArray = (arr1, arr2) => checkArrays(arr1, arr2).concat(checkArrays(arr2, arr1))
//   const checkArrays = (arr1, arr2) => arr1.filter(element => !arr2.includes(element))
  
//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);