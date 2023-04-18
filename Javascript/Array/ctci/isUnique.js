// Problem:
// Implement an algorithm to determine if a string has all unique characters. 
// what if you cannot use additional data structures
//

// Constraints:
// 1. strings are ASCII strings not the unicode strings


// Test Cases:
const testCase1 = 'computer science'		// no
const testCase2 = 'programming'					// no
const testCase3 = '23423!5%'						// no
const testCase4 = '@#$@#%^'							// no
const testCase5 = '%^&*()'							// yes
const testCase6 = 'computer'						// yes

function isUnique(text) {
	const charSet = new Set();
	for (let char of text) {
		if (charSet.has(char)) {
			return false;
		}
		charSet.add(char);	
	}
	return true;
}

console.log(`TestCase 1 ${(!isUnique(testCase1))? 'passed' : 'failed'}`);
console.log(`TestCase 2 ${(!isUnique(testCase2))? 'passed' : 'failed'}`);
console.log(`TestCase 3 ${(!isUnique(testCase3))? 'passed' : 'failed'}`);
console.log(`TestCase 4 ${(!isUnique(testCase4))? 'passed' : 'failed'}`);
console.log(`TestCase 5 ${(isUnique(testCase5))? 'passed' : 'failed'}`);
console.log(`TestCase 6 ${(isUnique(testCase6))? 'passed' : 'failed'}`);

// describe("isUnique", () => {
// 	test('Testing isUnique function', () => {
// 		expect(isUnique(testCase1).toBe(false));
// 		expect(isUnique(testCase2).toBe(false));
// 		expect(isUnique(testCase3).toBe(false));
// 		expect(isUnique(testCase4).toBe(false));
// 		expect(isUnique(testCase5).toBe(true));
// 		expect(isUnique(testCase6).toBe(true));
// 	})
// })
