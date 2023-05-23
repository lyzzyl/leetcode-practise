// 2023.5.23 by LYZ
board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const m = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let temp = board[i][j]
      if (temp === '.') continue;
      if (m.has(temp)) return false;
      m.set(temp, 1)
    }
    m.clear();
  }
  for (let i = 0; i < board[0].length; i++) {
    for (let j = 0; j < board.length; j++) {
      let temp = board[j][i]
      if (temp === '.') continue;
      if (m.has(temp)) return false;
      m.set(temp, 1)
    }
    m.clear();
  }
  for(let p=0;p<3;p++){
    for(let q=0;q<3;q++){
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
          let temp = board[3*p+i][3*q+j]
          if (temp === '.') continue;
          if (m.has(temp)) return false;
          m.set(temp, 1)
        }
      }
      m.clear();
    }
  }
  return true;
};
console.log(isValidSudoku(board));