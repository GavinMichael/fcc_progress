/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/


function myReplace(str, before, after) {
	var oldWordLen = before.length;
	var oldWordStartIndex = str.indexOf(before);
	var indexUpperCaseArray = [];
	
	for (var i = 0; i < oldWordLen; i++) {
		var checkedIndex = oldWordStartIndex + i;
		var checkedChar = str[checkedIndex];
		console.log();
		// if an uppercase char is found, replace that index of the after string with an uppercase version of it self
		if (checkedChar.toUpperCase() === checkedChar) {
			
			var splitAfter = after.split('');
			splitAfter[i] = splitAfter[i].toUpperCase();
			after = splitAfter.join('');
			
		} // end of if
		
	} // end of for
	
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
