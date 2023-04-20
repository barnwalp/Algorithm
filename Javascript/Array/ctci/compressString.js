/*
	* Problem: Implement a method to perform basic string compression using the counts
	* of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3
	* It the compressed string would not become smaller than the original string, your
	* method should return the orginal string.
	*
	* Constraint: 
	* 1. string only has uppercase and lowercase letters (a-z).
	* 2. string can also have spaces in between.
	* 
	* Solution: Although the operation happens with O(n) time complexity, the overall
	* time complexity will depends on the string concatenation operation, which sometimes
	* run with O(n2) time complexity. 
	* it is also advisable to check in advance whether new compressed string is shorter
	* than the actual string so that we don't create a string that is never used.
	*
*/
const testCase1 = 'lais ribeiro';
const testCase2 = 'paakkjddwjkk';
const testCase3 = 'aabcccccaaa';

function compressString(str) {
	let compressed = '';
	let ptr = 0;
	while (ptr < str.length) {
		let count = 1;
		while(str[ptr] === str[ptr+1]) {
			count++;
			ptr++;
		}
		compressed += str[ptr] + String(count);
		ptr++;
	}
	
	return (compressed.length < str.length) ? compressed : str;
}

console.log(compressString(testCase1));
console.log(compressString(testCase2));
console.log(compressString(testCase3));
