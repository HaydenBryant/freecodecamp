// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    // I'm a steamroller, baby
    var string = arr.toString();
    var newArr = string.split(",")
    newArr.map(function(e) {
      if (e == '[object Object]') { 
        e = {};
      } else if (isNaN(e)) {
        e = e;
      } else {
        e = parseInt(e);
      }

    })

    return newArr;

  }
  steamrollArray([1, [], [3, [[4]]]])