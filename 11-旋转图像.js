// 2023.5.23 by LYZ
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let m = matrix.length - 1;
  let n = Math.ceil(matrix.length / 2);
  for (let i = 0; i < n; i++)
    for (let j = i; j < m - i; j++) {
      let temp = matrix[i][j];
      let p = m - j;
      let q = m - i;
      matrix[i][j] = matrix[p][i];
      matrix[p][i] = matrix[q][p];
      matrix[q][p] = matrix[j][q];
      matrix[j][q] = temp;
    }
  return matrix;
};

console.log(rotate(matrix))