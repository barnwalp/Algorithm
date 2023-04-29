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

module.exports = {
	rotateMatrix: rotateMatrix,
	transposeMatrix: transposeMatrix,
}
