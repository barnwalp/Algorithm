/*
	* Problem: There are three types of edit that can be performed on a string: insert
	* a character, remove a character or replace a character. Given two string, write a
	* function to check if they are one edit (or zero edit) away.
	*
	* Constraint:
	* 1. There is no space in the provided strings
	* 2. all letters are case sensitive
	* 3. insertion, removal and replacement can be done at any index
	*
	* Solution: This is one of those problem where it is helpful to think about
	* the meaning of each operation. We can consider insertion and removal as 
	* same operation, as removal can be through reverse of insertion.
	* Furthremore, replacement can be considered as separate then other two.
	*
	* length of the string signifies the type of operation required to make both
	* strings equal. if the length of both string is same, only replacement may 
	* be required whereas if the difference in length is one then insertion or
	* removal is required. all remaining cases are to be considered as false.
*/
const testCase1 = ['pale', 'ple'];
const testCase2 = ['lol', 'pale'];
const testCase3 = ['pale', 'bale'];
const testCase4 = ['pale', 'bae'];
const testCase5 = ['catnip', 'catinip']

function isOneEditAway([first, second]) {
	if (first.length === second.length) {
		return checkWithReplacement(first, second);
	} else if (Math.abs(first.length - second.length) === 1) {
		return checkWithInsertion(first, second);
	} else {
		return false;
	}
}

function checkWithReplacement(first, second) {
	let noOfDiff = 0;
	let lp = 0;
	let rp = 0;

	while (lp < first.length) {
		if (first[lp] !== second[rp]) {
			noOfDiff++;
		}
		lp++;
		rp++;
	}
	return (noOfDiff > 1) ? false : true;
}

function checkWithInsertion(first, second) {
	let lp = 0;
	let rp = 0;
	let noOfDiff = 0;
	let temp='';

	if (first.length < second.length) {
		temp = first;
		first = second;
		second = temp;
	}
	while (lp < first.length) {
		if (first[lp] === second[rp]) {
			lp++;
			rp++;
		} else {
			noOfDiff++;
			lp++;
		}
	}
	return (noOfDiff > 1) ? false : true;
}

console.log(isOneEditAway(testCase1));
console.log(isOneEditAway(testCase2));
console.log(isOneEditAway(testCase3));
console.log(isOneEditAway(testCase4));
console.log(isOneEditAway(testCase5));
