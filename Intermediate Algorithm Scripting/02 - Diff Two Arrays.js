/*
CHALLENGE :
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {

	var resultsArr = [];

	// loop through each item of the first array and check 
	// if it is found in the second array
	arr1.forEach(function (currVal, index, array) {


		// if not found, push the unique value into the results array
		if (arr2.indexOf(currVal) === -1) {
			resultsArr.push(currVal);
		} // end of if

	}); // end of for each

	// do the same for the second array
	arr2.forEach(function (currVal, index, array) {


		// if not found, push the unique value into the results array
		if (arr1.indexOf(currVal) === -1) {
			resultsArr.push(currVal);
		} // end of if

	}); // end of for each

	// return the arr with the unique values
	return resultsArr;
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
