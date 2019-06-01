function gcd(a, b)
{ 
	return !b ? a : gcd(b, a % b);
} 

// Least Common Multiple function
function lcm(a, b) 
{
	return a * (b / gcd(a,b));
}

// LCM of all numbers in the range of arr=[a, b] 
function range_lcm(num)
{
    var arr = [];
    for (var i = 1; i <= num; i++){
        arr.push(i);
    }

	// Swap [big, small] to [small, big]
	if(arr[0] > arr[1]) (arr = [arr[1], arr[0]]);

	for(x = result = arr[0]; x <= arr[1]; x++) {
		result = lcm(x, result);
	}
	
	return result; 
}

range_lcm(5)