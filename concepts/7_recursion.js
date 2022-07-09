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

// console.log(`2 to the power 5 is: ${pow(2, 5)}`);
// console.log(`Sum of integer upto 5 is: ${sum(5)}`);
// console.log(`Factorial of 5 is: ${factorial(5)}`);
let test = 3;
printFun(test);
