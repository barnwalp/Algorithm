/*
	* Problem: Write an algorithm such that if an element in an MxN matrix is 
	* 0, its entire row and column are set to 0
	*
*/
const testCase1 = [
	[1, 2, 3, 4, 5, 6],
	[7, 8, 9, 10,11,12],
	[13,14,0, 16,17,33],
	[18,19,20,21,22, 0],
	[23,24,25,26,27,35],
	[28,29,30,0, 32,36]
]

function findingZero(matrix) {
	let zeroList = [];
	for (let i=0; i<matrix.length; i++) {
		for (let j=0; j<matrix.length; j++) {
			if (matrix[i][j] === 0) {
				zeroList.push([i,j]);
			}
		}
	}
	return zeroList;
}

function makeZero(zeroList, matrix) {
	for (let arr of zeroList) {
		let [r, c] = arr;
		for (let i=0; i<matrix.length; i++) {
			matrix[r][i] = 0;
			matrix[i][c] = 0;
		}
	}
	return matrix;
}

function zeroMatrix(matrix) {
	return makeZero(findingZero(matrix), matrix);
}

// console.log(findingZero(testCase1));
// console.log(makeZero([[2,2], [3,5], [5,3]], testCase1));
console.log(zeroMatrix(testCase1));
