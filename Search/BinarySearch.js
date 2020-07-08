// Time Complexity: O(log n)
// Needed to be sorted!
function search(list, find) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (list[mid] === find) {
      return true;
    } else if (list[mid] < find) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

console.log(search([1, 2, 3, 10, 33, 41, 65, 87, 283], 65));
