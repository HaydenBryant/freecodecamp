function sumPrimes(num) {
    if (num < 2) return 0;
    else if (num === 2) return 2;

    var primeNums = [2];

    for (var i = 3; i <= num; i++) {
        var prime = true;
        for (var j = 0; j < primeNums.length; j++) {
            if (i % primeNums[j] === 0) {
                prime = false;
            }
        }
        if (prime === true) {
            primeNums.push(i);
        }
    }
    var sumAll = 0;
    
    primeNums.map(nums => sumAll += nums);
    
    return sumAll;
}


sumPrimes(10); 




function sumPrimes(num) {
    // step 1	
    let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
    // step 2
    let onlyPrimes = arr.filter( (n) => { 
      let m = n-1;
      while (m > 1 && m >= Math.sqrt(n)) { 
        if ((n % m) === 0) 
          return false;
          m--;
      }
        return true;
    });
    // step 3
    return onlyPrimes.reduce((a,b) => a+b); 
  }
  // test here
  sumPrimes(977);