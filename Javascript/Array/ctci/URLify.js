/*
Problem:
Write a method to replace all spaces in a string with %20. true length of the string
is also provided.

Constraint:
1. string has sufficient space at the end to hold the additional characters.
2. multiple spaces must not be considered as single space
 
*/
const testCase1 = 'Mila Kunis';
const testCase2 = 'Megan  Fox';
const testCase3 = 'Sir Cristopher lee'
const testCase4 = 'what the fudge ? '

function urlify(text) {
	let url = text;
	let index = url.length-1;
	while (index > 0) {
		while (url[index] !== ' ' && index > 0) {
			index -= 1;
		}
		if (url[index] === ' ') {
			url = url.slice(0,index) + "%20" + url.slice(index+1);
		}
		index -= 1;
	}
	return url
}

console.log(`Program Output --> Correct Response \n`)
console.log(`${urlify(testCase1)} --> Mila%20Kunis`);
console.log(`${urlify(testCase2)} --> Megan%20%20Fox`);
console.log(`${urlify(testCase3)} --> Sir%20Crisopher%20lee`);
console.log(`${urlify(testCase4)} --> What%20the%20fudge%20?%20`);
