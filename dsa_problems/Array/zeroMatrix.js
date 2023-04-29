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

module.exports = {
	zeroMatrix: zeroMatrix,
}
