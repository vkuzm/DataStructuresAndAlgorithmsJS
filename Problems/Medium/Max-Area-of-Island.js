
// Time: O(n^2)
// Space: O(1)
const maxAreaOfIsland = function (grid) {
  if (grid.length === 0) {
    return 0;
  }

  let maxArea = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j));
      }
    }
  }
  return maxArea;
};

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) {
    return 0;
  }

  grid[i][j] = 0;
  let counter = 1;
  counter += dfs(grid, i + 1, j);
  counter += dfs(grid, i - 1, j);
  counter += dfs(grid, i, j + 1);
  counter += dfs(grid, i, j - 1);
  return counter;
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);