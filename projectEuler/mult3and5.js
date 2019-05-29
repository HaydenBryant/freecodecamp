// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    var sum = 0;
    var i = 3;
    while (i < number) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
        i++;
    }
    return sum;
}

multiplesOf3and5(1000);