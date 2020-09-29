
// Time complexity: O(n^2)
// Space complexity: O(1)
const countBattleships = function (board) {
  if (board.length === 0) {
    return 0;
  }

  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        counter += dfs(board, i, j);
      }
    }
  }
  return counter;
};

function dfs(board, i, j) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] === '.') {
    return;
  }

  board[i][j] = '.';
  dfs(board, i-1, j);
  dfs(board, i+1, j);
  dfs(board, i, j-1);
  dfs(board, i, j+1);

  return 1;
}

console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]));