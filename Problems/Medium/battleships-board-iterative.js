
// Time complexity: O(n^2)
// Space complexity: O(1)
const countBattleships = function (board) {
  if (board.length === 0) {
    return 0;
  }

  let counter = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      if (i > 0 && board[i - 1][j] === "X") {
        continue;
      }
      if (j > 0 && board[i][j - 1] === "X") {
        continue;
      }
      counter++;
    }
  }
  return counter;
};

console.log(
  countBattleships([
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"],
  ])
);