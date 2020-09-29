
// Time complexity: O(n^2)
// Space complexity: O(1)
const numIslands = function (grid) {
  if (grid.length === 0) {
    return 0;
  }

  let counter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        counter += dfs(grid, i, j);
      }
    }
  }
  return counter;
};

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === "0") {
    return;
  }

  console.log(grid);

  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);

  return 1;
}

console.log(
  numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ])
);
