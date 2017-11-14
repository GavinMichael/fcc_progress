/*
CHALLENGE :
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    // this will be returned
    var result = '';

    var romanLookup = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var decLookup = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


    for (var i = 0; i < romanLookup.length; i++) {
        while (decLookup[i] <= num) {
            result += romanLookup[i];
            num -= decLookup[i];
        }
    }

    return result;

}