/*
CHALLENGE :
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    var _alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var result = undefined;
    var splitStrArr = str.split('');
    var startIndex = _alphabet.indexOf(splitStrArr[0]);
    var counter = 0;

    for (var i = startIndex; i < startIndex + splitStrArr.length; i++) {

        if (splitStrArr[counter] != _alphabet[i]) {
            result = _alphabet[i];
            return result;
        }
        counter++;
    } // end of for loop

    return result;
}

fearNotLetter("abce");