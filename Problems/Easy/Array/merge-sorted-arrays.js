// Given 2 arrays that are sorted.
// Can you merge these two arrays into big one

// Input:
//[0,3,4,31];
//[4,6,30];

//Output:
//[0,3,4,4,6,30,31];

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays2([11, 4, 6, 66], [1, 16, 33]));
console.log(mergeSortedArrays3([0, 3, 4, 31], [4, 6, 30]));

// Time Complexity = O(n)
// Space Complexity = O(n)
function mergeSortedArrays(array1, array2) {
  if (array1.length < 1 || array2.length < 1) {
    return 'Enter at least one number for each arrays!';
  }

  const mergedArray = [];
  while (array1.length > 0 || array2.length > 0) {
    //console.log('array1', array1);
    //console.log('array2', array2);
    //console.log('sortedArray', sortedArray);

    // find min and max
    if (array1[0] > array2[0]) {
      mergedArray.push(array2.shift());
    } else {
      mergedArray.push(array1.shift());
    }

    //console.log('array1', array1);
    //console.log('array2', array2);
    //console.log('sortedArray', sortedArray);
  }
  return mergedArray;
}

// Time Complexity = O(n)
// Space Complexity = O(n)
function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
    if(array2Item === undefined || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }
    else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

function mergeSortedArrays3(array1, array2) {
  if (array1.length < 1 || array2.length < 1) {
    return 'Enter at least one number for each arrays!';
  }
  return array1.concat(array2).sort((a, b) => a - b);
}