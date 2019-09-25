// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");




function translatePigLatin(str) {
  var output = '';
  var vowel = /[aeiou]/gi;

  if (str[0].match(vowel)) {
    output = str + 'way';

  } else if(str.match(vowel) === null) {
    output = str + 'ay';
  } else {
    var vIndex = str.indexOf(str.match(vowel)[0]);

    output = str.substr(vIndex) + str.substr(0, vIndex) + 'ay';
  }

  return output;
}

translatePigLatin("consonant");