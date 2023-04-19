const { Pack } = require("tar");

/*
	* Problem: There are three types of edit that can be performed on a string: insert
	* a character, remove a character or replace a character. Given two string, write a
	* function to check if they are one edit (or zero edit) away.
	*
	* Constraint:
	* 1. There is no space in the provided strings
	* 2. all letters are case sensitive
	* 3. insertion, removal and replacement can be done at any index
*/
const testCase1 = ['pale', 'ple'];
const testCase2 = ['lol', 'pale'];
const testCase3 = ['pale', 'bale'];
const testCase4 = ['pale', 'bae'];
const testCase5 = ['catnip', 'catinip']

function isOneEditAway([lStr, rStr]) {
	let lPointer = 0;
	let rPointer = 0;
	let noOfDiff = 0;
	const length = Math.max(lStr.length, rStr.length);

	while (lPointer < (length-1) && rPointer < (length-1)){
		if(lStr[lPointer] === rStr[rPointer]) {
			lPointer ++;
			rPointer ++;
			console.log({lPointer, rPointer, noOfDiff});
		} else if (lStr[lPointer+1] === rStr[rPointer]) {
			lPointer++;
			noOfDiff++;
			console.log({lPointer, rPointer, noOfDiff});
		} else if (lStr[lPointer] === rStr[rPointer+1]) {
			rPointer++;
			noOfDiff++
			console.log({lPointer, rPointer, noOfDiff});
		} else if (lStr[lPointer+1] === rStr[rPointer+1]) {
			lPointer++;
			rPointer++;
			noOfDiff++;
			console.log({lPointer, rPointer, noOfDiff});
		}	else {
			console.log(lStr[lPointer]);
			console.log(lStr[rPointer]);
			console.log({lPointer, rPointer, noOfDiff});
			return false;
		}
	}
	console.log(noOfDiff);
	return (noOfDiff === 1) ? true: false;
}

// console.log(isOneEditAway(testCase1));
// console.log(isOneEditAway(testCase2));
// console.log(isOneEditAway(testCase3));
// console.log(isOneEditAway(testCase4));
console.log(isOneEditAway(testCase5));
