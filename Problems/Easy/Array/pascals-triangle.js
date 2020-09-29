var generate = function(numRows) {
  if (numRows <= 0) {
    return [];
  } else if (numRows === 1) {
    return [[1]];
  }

  const result = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const newResult = [];
    const prevResult = result[i - 1];

    // Push first 1
    newResult.push(1);

    // Push other calculated numbers
    for (let j = 0; j < prevResult.length - 1; j++) {
      newResult.push(prevResult[j] + prevResult[j + 1]);
    }

    // Push end 1
    newResult.push(1);

    result.push(newResult);
  }

  return result;
};

console.log(generate(5));
