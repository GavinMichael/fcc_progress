
function sumAll(arr) {
	
	// sort the array from lowest to highest
	arr.sort(function(a,b) {return a - b});
	
	// add the first and second values from the original array
	var result = arr[0] + arr[1];		
	
	// count through all the values between the first and second values
	for (var i = arr[0] + 1; i < arr[1]; i++) {
		// add the value to the result
		result += i;
	}
	
	// return the sum of everything
  return result;
}

sumAll([1, 4]);
