
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));