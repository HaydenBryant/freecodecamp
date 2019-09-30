// function whatIsInAName(collection, source) {
//     // What's in a name?
//     var arr = [];
//     // Only change code below this line

//     var keys = Object.keys(source);

//     arr = collection.filter(element => {
//         return keys.every(key => {
//             return element[key] && element[key] === source[key]
//         })
//     })

//     // Only change code above this line
//     return arr;
// }

// const whatIsInAName = (collection, source) => { return (collection.filter(obj => checkObjectForSourceKeyValuePairs(source, obj)))}

// const checkObjectForSourceKeyValuePairs = (source, obj) => {
//     let check = true;
//     Object.keys(source).forEach(key => {
//         if(source[key] !== obj[key]) check = false;
//     });
//     return check;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });






function whatIsInAName(collection, source) {
    var keys = Object.keys(source);
    return (collection.filter(obj => {
        for(var key = 0; key < keys.length; key++){
            if(source[keys[key]] !== obj[keys[key]]){
                return false;
            }
        }
        return true;
    }));
}

// function whatIsInAName(collection, source) {
//     // What's in a name?
//     var arr = [];
//     // Only change code below this line
//     var keys = Object.keys(source);
//     for (var item = 0; item < collection.length; item++)
//     {
//       var isGood = true;
//       for (var key = 0; key < keys.length; key++)
//       {
//         if (!collection[item].hasOwnProperty(keys[key])){
//           isGood = false;
//           break;
//         }
//         // key exists
//         if (collection[item][keys[key]] !== source[keys[key]])
//         {
//           isGood = false;
//           break;
//         }
//       }
//       if (isGood)
//       {
//         arr.push(collection[item])
//       }
//     }
    
//     // Only change code above this line
//     return arr;
//   }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });