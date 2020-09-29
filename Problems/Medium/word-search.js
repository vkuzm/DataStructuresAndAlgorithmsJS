

const wordExists = (board, word) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word.charAt(0)) {
        if (check(board, word, row, col, 0)) {
          return true;
        }
      }
    }
  }
  return false;
};

const check = (board, word, row, col, index) => {
  if (index === word.length) {
    return true;
  }

  if (row < 0 || col < 0 || row >= board.length || col >= board[row].length || board[row][col] !== word.charAt(index)) {
    return false;
  }

  board[row][col] = ' ';
  const found = check(board, word, row - 1, col, index + 1)
  || check(board, word, row + 1, col, index + 1)
  || check(board, word, row, col - 1, index + 1)
  || check(board, word, row, col + 1, index + 1);

  return found;
};

console.log(wordExists([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "ABCCED"));