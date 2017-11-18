/*
CHALLENGE :
Find first vowel A, E, I, O, U in the word,
take that chunk, plug it at the end, and add ay
"banana" = "ananabay"
"trash" = "ashtray"

If word starts with 2 or more consonant (consonant clusters)

"cheers" = "eerschay"

If word starts with a vowel, 
add way at the end
"eat" = "eatway"

*/

function translatePigLatin(str) {
  
  var _vowels = ["a", "e", "i", "o", "u"];
  var _consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"];
  var _firstVowelIndex;
  
  // check if first letter is a vowel
  for (var i = 0; i < _vowels.length; i++) {
      // if first letter is a vowel
     if (str[0] === _vowels[i]) {
       str += "way";
       return str;
     } else {
       // if first char is not a vowel, find the index of the first char
       _firstVowelIndex = findFirstVowelIndex(str);
     } // end of else
  } // end of for
  
  // check for consonant cluster
  var _consonantCluster = 0;
  for (var ii = 0; ii < _consonant.length; ii++) {
    // if the first char is a consonant, increment by one
    if (str[0] === _consonant[ii]) {
      _consonantCluster++;
    } // end of if
    // if the second char is a consonant, increment by one
    if (str[1] === _consonant[ii]) {
      _consonantCluster++;
    } // end of if
  } // end of for
  
  // if this variable is 2, then the first two letters are a consonant cluster
  if (_consonantCluster === 2) {
    // save the chars that we will plug at the end
    var headStr = str[0] + str[1];
    // cut out the rest of the string
    var partialStr = str.substr(2, str.length);
    var newStr = partialStr + headStr + "ay";
    return newStr;
  } // end of if
  
  var headStr = str.substring(0, _firstVowelIndex);
  var partialStr = str.substring(_firstVowelIndex, str.length);
  var newStr = partialStr + headStr + "ay";


  return newStr;
}


function findFirstVowelIndex (str) {
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        return i;
      default:
        break;        
    }
  }
}


translatePigLatin("consonant");
