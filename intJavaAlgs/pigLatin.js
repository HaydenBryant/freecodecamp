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