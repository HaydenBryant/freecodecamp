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

const whatIsInAName = (collection, source) => { return (collection.filter(element => checkObjectForSourceKeyValuePairs(source, element)))}

const checkObjectForSourceKeyValuePairs = (source, obj) => {
    let check = true;
    Object.keys(source).forEach(key => {
        if(source[key] !== obj[key]) check = false;
    });
    return check;
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });