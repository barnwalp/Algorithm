// Dynamic programming is just an optimization technique which uses caching
// It divides the problem into collection of sub-problems and then solving
// the sub-problems and storing them to use in future.

// Memoization is specific form of caching in which we store the return
// value of a function based on it's parameter
// Dynamic programming is just divide and conqure with memoization 

// Without Memoization
function addTo80(n) {
	console.log('takes long time');
	return n + 80;
}

// With Memoization
function memoizedAddTo80(n) {
	let cache = {};
	return function(n) {
		if (n in cache) {
			console.log('takes value from hash');
			return cache[n];
		}
		console.log('takes long time');
		cache[n] = n + 80;
		return cache[n];
	}
}
// const meomoized = memoizedAddTo80();
// console.log(meomoized(80));
// console.log(meomoized(70));
// console.log(meomoized(80));

// Fibonacci Series with Memoization
let calculations = 0;
function fibonacci(n) {		// O(n)
	let cache = {};
	return function fib(n) {
		calculations++;
		if(n in cache) {
			return cache[n];
		} else if (n < 2){
			cache[n] = n;
			return cache[n];
		} else {
			cache[n] = fib(n-1) + fib(n-2);
			return cache[n];
		}
	}
}

const fib = fibonacci();
console.log(fib(5));
console.log('No of Calculations: ', calculations);
console.log(fib(7));
console.log('No of Calculations: ', calculations);
console.log(fib(8));
console.log('No of Calculations: ', calculations);
console.log(fib(9));
console.log('No of Calculations: ', calculations);
console.log(fib(200));
console.log('No of Calculations: ', calculations);
