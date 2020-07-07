
//It’s useful for the cases when you are pretty sure that the list is almost sorted
// or already sorted or have a small amount of elements.

// Time Complexity: Best: O(n), Worst: O(n^2)
// Space Complexity: O(1)
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }

  return array;
}

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));