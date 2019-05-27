function sumPrimes(num) {
    if (num < 2) {
        return 0;
    } else if (num === 2){
        return 2;
    }

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