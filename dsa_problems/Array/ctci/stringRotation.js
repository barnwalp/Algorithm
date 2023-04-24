/*
	* Problem: Assume you have a method isSubstring which checks if one word is a substring
	* of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of
	* s1 using only one call to isSubstring.
	*
	* Solution: 
	* s1 = 'waterbottle'
	* s2 = 'erbottlewat'   // is a rotation of s1
	* x = 'wat'
	* y = 'erbottle'
	* s2 = yx
	* s1 = xy
	* s1s1 = 'wat{erbottlewat}erbottle'  // here one can find s2
	* which means that if s2 is a rotation of s1, then s2 will always be a substring of s1s1
*/

const testCase1 = ['waterbottle', 'erbottlewat'];
const testCase2 = ['test', ''];
const testCase3 = ['', ''];
const testCase4 = ['', 'test'];
const testCase5 = ['picking', 'in'];
const testCase6 = ['assuming', 'sum'];

// is s2 a substring of s1
function isSubstring([s1, s2]) {
	let p1 = 0;
	let p2 = 0;
	while (p1 < s1.length) {
		if (s1[p1] === s2[p2]) {
			p1++;
			p2++;
		} else {
			if (p2 !== s2.length) {
				p1++;
				p2 = 0;
			} else {
				return true;
			}
		}
	}
	return false;
}

// is s2 a rotation of s1
function stringRotation([s1, s2]) {
	let doubleS1 = s1 + s1;
	return doubleS1.includes(s2)
}

console.log(stringRotation(testCase1));
console.log(stringRotation(testCase2));
console.log(stringRotation(testCase3));
console.log(stringRotation(testCase4));
console.log(stringRotation(testCase5));
console.log(stringRotation(testCase6));

// console.log(testCase1[0].includes(testCase1[1]));
// console.log(testCase2[0].includes(testCase2[1]));
// console.log(testCase3[0].includes(testCase3[1]));
// console.log(testCase4[0].includes(testCase4[1]));
// console.log(testCase5[0].includes(testCase5[1]));
// console.log(testCase6[0].includes(testCase6[1]));
