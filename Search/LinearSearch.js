
// Time Complexity: O(n)
function search(list, find) {
  for (let number of list) {
    if (number === find) {
      return true;
    }
  }
  return false;
}

console.log(search([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0], 63));