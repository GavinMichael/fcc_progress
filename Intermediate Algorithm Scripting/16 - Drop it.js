/*
CHALLENGE :
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

function dropElements(arr, func) {

	// create a copy of the array
	var arrCopy = arr.slice();

	for (var i = 0; i < arr.length; i++) {
		var val = arr[i];
		if (func(val)) {
			// if true
			break;
		} else {
			// if false
			arrCopy.shift();
		}
	}

	return arrCopy;

}

dropElements([1, 2, 3], function (n) { return n < 3; });