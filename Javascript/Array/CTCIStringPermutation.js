/*
Problem:
Given two string, write a method to decide if one is a 
permutation of the other.

Constraint:
1. Strings are case sensitive
2. Whitespace is significant


*/

const testCase1 = ['dog', 'God'];
const testCase2 = ['name', 'mane'];
const testCase3 = ['pull', 'pace'];
const testCase4 = ['tom marvollo riddle ', 'i am lord voldemort'];

function stringPermutation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const strHist = {}
	for (let char of str1) {
		if (strHist[char] !== undefined) {
			strHist[char] += 1;
		}
		strHist[char] = 1;
	}

	for (let char of str2) {
		if (strHist[char] === undefined) {
			return false;
		}
		// here be bugs
		strHist[char] -= 1;
	}

	if (Object.keys(strHist).length > 0) {
		return false;
	}

	return true;
}

// console.log(`TestCase 1 ${(!stringPermutation(testCase1[0], testCase1[1]))? 'passed' : 'failed'}`);
console.log(`TestCase 2 ${(stringPermutation(testCase2[0], testCase2[1]))? 'passed' : 'failed'}`);
// console.log(`TestCase 3 ${(!stringPermutation(testCase3[0], testCase3[1]))? 'passed' : 'failed'}`);
// console.log(`TestCase 4 ${(stringPermutation(testCase4[0], testCase4[1]))? 'passed' : 'failed'}`);

