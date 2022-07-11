/*
	* Property of recursion tree visualizations are:
	* Each node represents a single recursive function call
	* The height of the recursion tree is the depth of our function call stack(n)
	* The rate of change of the tree's width represents the time complexity of our function(m)
	*
	*
	* Recursive function uses more memory, because recursive function adds to the stack with each recursive call, and keeps the values there untill the call is finished. The recursive function uses LIFO structure just like the stack.
	*

*/
// 1. Recursive Exponent
// f(n) = n					n=1
// f(n) = n+f(n-1)	n>1

function pow(n, k) {
	if (k === 1) {
		return n;
	}
	return (n * pow(n, k-1));
}

// 2. Recursive Adding
// f(n) = 1					n=1
// f(n) = n+f(n-1)	n>1

function sum(n) {
	if (n == 1) {
		return n;
	}
	return n + sum(n-1);
}

// 3. Recursive Factorial
// f(n) = 1					n=1
// f(n) = n*f(n-1)	n>1
function factorial(n) {
	if (n === 1) {
		return n;
	}
	return n * factorial(n-1);
}

function printFun(test) {
	if (test < 1) {
		return;
	} else {
		console.log(test);
		printFun(test - 1);
		console.log(test);
		return;
	}
}

function fibonacci(num) {
	if (num === 0 || num === 1) {
		return num;
	} else {
		return fibonacci(num-1) + fibonacci(num-2);
	}
}

/*
	* Time Complexity:
	* T(n) = C									n<=1
	* T(n) = T(n-1) + T(n-2)		n>1	
	* T(0) = T(1) = 1 
	*
	* In Case of Upper Bound: T(n-2) ~ T(n-1)
	* T(n) = 2T(n-1) + C				C=4
	* T(n) = 2{2T(n-2) + C} + C
	*			 = 4T(n-2) + 3C				k=2
	*			 = 8T(n-3) + 7C				k=3
	*			 = 2^k . T(n-k) + (2^k-1)C
	*	n-k = 0 => k=n
	*			 = 2^n . T(0) + (2^n - 1)C
	* T(n) = 2^n . 1 + (2^n - 1)C
	* T(n) = (1+C).2^n - C
	* O(n) = 2^n
	*
	* In case of lower bound: T(n-1) ~ T(n-2)
	* T(n) = 2T(n-2) + C				C=4
	* T(n) = 2{2T(n-4) + C} + C
	*			 = 4T(n-4) + 3C				k=2
	*			 = 8T(n-6) + 7C				k=3
	*			 = 2^k . T(n-2k) + (2^k-1)C
	*	n-2k = 0 => k=n/2
	*			 = 2^(n/2) . T(0) + (2^(n/2) - 1)C
	* T(n) = (1+C).2^(n/2) - C
	* Omega(n) = 2^(n/2)
*/


function fib_series(num) {
	for (let i=0; i<=num; i++) {
		console.log(fibonacci(i));
	}
}

// Recursively reverse a string
function reverseString(str) {
	if (str === "") {
		return "";
	} else {
		return reverseString(str.substr(1)) + str.charAt(0);
	}
}


console.log(`2 to the power 5 is: ${pow(2, 5)}`);
console.log(`Sum of integer upto 5 is: ${sum(5)}`);
console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Fibonacci seried of 6 is: ${fib_series(6)}`)
console.log(`Reverse of string yoyo master: ${reverseString('yoyo master')}`)
