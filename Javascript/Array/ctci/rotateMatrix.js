/*
	* Problem: Given an image represented by an NxN matrix, where each pixel in the 
	* image is 4 bytes, write a method to rotate the image by 90 degrees; basically
	* transposing the matrix
	*
	* Constraint: 
	* 1. Each pixel have 4 bytes storage
	* 2. To simplify, we are storing integers in the matrix
	*
	* Solution:
	* 
*/
const testCase1 = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
]
const testCase2 = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12],
	[13,14,15,16],
]

function rotateMatrix(matrix) {
	let newMatrix = matrix;
	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix[0].length; j++) {
			newMatrix[i][j] = matrix[j][i];
			// console.log(i, j, newMatrix[j][i], matrix[i][j]);
		}
	}
	return newMatrix;
}

console.log(rotateMatrix(testCase1), testCase1);
console.log(rotateMatrix(testCase2), testCase2);
// rotateMatrix(testCase1);
// rotateMatrix(testCase2);
