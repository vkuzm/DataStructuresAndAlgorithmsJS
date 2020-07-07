
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));