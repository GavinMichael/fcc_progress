/*
CHALLENGE :
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/


function spinalCase(str) {

  var strArr = str.split('');
  strArr.forEach(function(val, index) {
    if (val == val.toUpperCase() && val != ' ' && val != '_' && val != '-') {
      if (strArr[index - 1] != ' ') {
        strArr.splice(index, 1, '-', val.toLowerCase());
      }
    }
  });
  
  if (strArr[0] === '-') {
  	strArr.splice(0, 1);
  }
  str = strArr.join('');
  str = str.toLowerCase();
	str = str.replace(/ |_/gi, function checkChar(char) {
    return '-';
  });
  str = str.replace(/--/gi, '-');
  
  return str;
}

spinalCase('This Is Spinal Tap');
