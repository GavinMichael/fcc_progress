/*
CHALLENGE :
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arr) {
    var results = [];

    // convert the arguments object into an array
    var argsArr = Array.from(arguments);
    // loop through the main array to access the subarrays
    for (var i = 0; i < arguments.length; i++) {
        var subArr = arguments[i];
        // get each value of the subarray by looping through it
        for (var ii = 0; ii < subArr.length; ii++) {
            var currValue = subArr[ii];
            // if the current value is in the results array, dont add it
            // else add it
            if (results.indexOf(currValue) < 0) {
                results.push(currValue);
            }
        }

    }
    return results;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
