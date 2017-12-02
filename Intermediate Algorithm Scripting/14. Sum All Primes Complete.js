
function sumPrimes(num) {
	// generate prices till num
  var primeArr = [ 2 ];
  for (var i = 2; i <= num; i++) {
  	var isPrime = true;
    
  	primeArr.forEach(function (primeNum) {
    	if (i % primeNum == 0) {
      	isPrime = false;
      }
    }); // end of array loop
    
    if (isPrime === true) {
    	primeArr.push(i);
    }
    
  }
  
  var total = 0;
  primeArr.forEach(function(val) {
  	total +=  val;
  });
  
  return total;
  
}

console.log(sumPrimes(977));
