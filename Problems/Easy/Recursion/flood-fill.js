
// Time: O(n)
// Space: O(1)
function floodFill(image, sr, sc, newColor) {
  if (image[sr][sc] !== newColor) {
    fill(image, image[sr][sc], sc, sc, newColor);
  }
  return image;
}

function fill(image, target, row, col, newColor) {
  if (row < 0 || row > image.length - 1 || col < 0 || col > image[row].length - 1 || image[row][col] !== target) {
    return false;
  }

  image[row][col] = newColor;
  fill(image, target, row - 1, col, newColor);
  fill(image, target, row + 1, col, newColor);
  fill(image, target, row, col - 1, newColor);
  fill(image, target, row, col + 1, newColor);
}

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1));