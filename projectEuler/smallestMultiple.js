function smallestMult(n) {
    // Good luck!
    primeArr = [];

    for(var i=1; i<=n ;i++){
        for(var j=2; j<i; j++){
            if(i % j !== 0){
                primeArr.push(i);
            }
        }
    }

}

smallestMult(20);