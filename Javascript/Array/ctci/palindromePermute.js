/*
	* Problem: Given a string, write a function to check it is a permutation of a palindrome. 
	* A palindrome is a word or phrase that is the same forwards and backwards.
	*
	* Constraint:
	* 1. palindrome does not need to be limited to just dictionary words
	* 2. spaces should not be considered in a palindrome
	* 3. all the letters to be case insensitve
	*
*/
const testCase1 = 'Tact Coa';
const testCase2 = 'stt arsa';
const testCase3 = 'pique pi';
const testCase4 = 'lol lol lol ll';
const testCase5 = ' ';
const testCase6 = 'a';
const testCase7 = 'as';

function permutePalindrome(text) {
	text = text.toLowerCase();
	let textHist = {};
	let length = 0;
	for (let char of text) {
		if (char !== ' ') {
			if (textHist[char] !== undefined){
				textHist[char] += 1;
				length ++;
			} else {
				textHist[char] = 1;
				length ++;
			}
		}
	}
	let noOfOddChar = 0	
	for (let item in textHist) {
		if (textHist[item] %2 !== 0) {
			noOfOddChar += 1
		}
	}

	if (length % 2 === 0 ) {
		if (noOfOddChar === 0) {
			return true;
		} else {
			return false;
		}
	} else {
		if (noOfOddChar === 1) {
			return true;
		} else {
			return false;
		}
	}
}

console.log(permutePalindrome(testCase1));
console.log(permutePalindrome(testCase2));
console.log(permutePalindrome(testCase3));
console.log(permutePalindrome(testCase4));
console.log(permutePalindrome(testCase5));
console.log(permutePalindrome(testCase6));
console.log(permutePalindrome(testCase7));
