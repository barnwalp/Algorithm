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
function stringRotation(s1, s2) {
	return false;
}

// console.log(stringRotation([s1, s2]));
console.log(isSubstring(testCase1));
console.log(isSubstring(testCase2));
console.log(isSubstring(testCase3));
console.log(isSubstring(testCase4));
console.log(isSubstring(testCase5));
console.log(isSubstring(testCase6));
