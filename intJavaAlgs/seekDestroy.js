// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   return arr.filter(function (val) {
//     return !args.includes(val);
//   });
// }

const destroyer = (arr, ...args) => arr.filter(element => !args.includes(element))

destroyer([1, 2, 3, 1, 2, 3], 2, 3);