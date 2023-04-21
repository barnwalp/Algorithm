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

function rotateMatrix(ipMatrix) {
	let matrix = ipMatrix.slice();
	let layers = Math.ceil(matrix.length/2)	
	for (let layer = 0; layer <= layers; layer++) {
		let first = layer;
		let last = matrix.length-layer-1;
		for (let i=first; i<=last; i++) {
			let offset = i - first;
			// save top
			let temp = matrix[first][i];
			// left -> top
			matrix[first][i] = matrix[last-offset][first]
			// bottom -> left
			matrix[last-offset][first] = matrix[last][last-offset]
			// right -> bottom
			matrix[last][last-offset] = matrix[i][last]
			// top -> right
			matrix[i][last] = temp;
		}

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
