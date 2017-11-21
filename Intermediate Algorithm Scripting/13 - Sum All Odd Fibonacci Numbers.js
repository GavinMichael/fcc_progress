
function sumFibs(num) {

    var sum = 0;
    // populate an array with the Fib seq till num
    var fibArr = [1, 1, 2];

    for (var i = 1; fibArr[i] <= num; i++) {
        fibArr.push(fibArr[i] + fibArr[i + 1]);
    }

    fibArr.forEach((val) => {
        if (val % 2 != 0 && val <= num) {
            sum += val;
        }
    });

    return sum;
}


sumFibs(4);
