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
		console.log(index);
		if (url[index] === ' ') {
			url = url.slice(0,index) + "%20" + url.slice(index+1);
		}
		index -= 1;
	}
	console.log(url);
}

urlify(testCase1);
urlify(testCase2);
urlify(testCase3);
urlify(testCase4);
