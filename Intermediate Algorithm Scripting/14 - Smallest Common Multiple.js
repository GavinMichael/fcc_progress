/*
CHALLENGE :
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
    // sorts the given array
    arr.sort(function (a, b) { return a - b;});
    // will hold the incremeneted largest value
    var rangeArr = [];
    // generate the range of values
    for (var j = arr[0]; j <= arr[1]; j++) {
			
        rangeArr.push(j);
    }

    var largestValArr = [];
    largestValArr.push(arr[1]);
    var largestVal = largestValArr[largestValArr.length - 1];
    var resultFound = checker(rangeArr, largestVal);
		
		while (!resultFound) {
			var nextLargestVal = largestValArr[largestValArr.length - 1] + largestVal;
			largestValArr.push(nextLargestVal);		
			resultFound = checker(rangeArr, nextLargestVal);
		}
    return largestValArr[largestValArr.length - 1];
}

function checker(rangeArr, largestVal) {
    for (var i = rangeArr[0]; i < rangeArr[rangeArr.length - 1]; i++) {
        if (largestVal % i !== 0) {            
            return false;
        }
    }
    return true;
}

smallestCommons([1,5]);
