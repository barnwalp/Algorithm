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
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9,10,11,12],
	[13,14,15,16],
]

const testCase3 = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11,12,13,14,15],
	[16,17,18,19,20],
	[21,22,23,24,25]
]
console.log(testCase2);
console.log(testCase3);

function rotateMatrix(matrix) {
	let l = 0;
	let r = matrix.length-1
	let temp = 0;
	while (l < r) {
		for (i=0; i<r-l; i++){
			let top = l;
			let bottom = r;
			temp = matrix[top][l+i];
			matrix[top][l+i] = matrix[bottom-i][l];
			matrix[bottom-i][l] = matrix[bottom][r-i];
			matrix[bottom][r-i] = matrix[top+i][r];
			matrix[top+i][r] = temp;
		}
		l++;
		r--;
	}
	return matrix;
}

function transposeMatrix(matrix) {
	let newMatrix = matrix.slice();
	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix[0].length; j++) {
			newMatrix[i][j] = matrix[j][i];
		}
	}
	return newMatrix;
}

// console.log(transposeMatrix(testCase1), testCase1);
// console.log(transposeMatrix(testCase2), testCase2);
// console.log(rotateMatrix(testCase1), testCase1);
console.log(rotateMatrix(testCase2));
console.log(rotateMatrix(testCase3));
