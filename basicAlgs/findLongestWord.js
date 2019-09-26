// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
    var longWord = ""
    str.split(' ').forEach(word => {
        if(word.length > longWord.length) longWord = word;
    });
  
    console.log(longWord.length);
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//   function findLongestWord(str) {
//     return str.split(' ').sort(function(a, b) { return b.length - a.length; }).length;
//     // return longestWord[0].length;
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog");

const findLongestWordLength = (str) => { return str.split(' ').sort(function(a, b) { return b.length - a.length; })[0].length;}
findLongestWordLength("The quick brown fox jumped over the lazy dog");