var reverse = function(x) {
  if (x === 0) {
    return x;
  }

  const numbers = x.toString().split('');
  let result = '';

  if (numbers[0] === '-') {
    result += '-';
  }

  let notZero = false;
  for (let i = numbers.length-1; i >= 0; i--) {
    if (numbers[i] !== '0' || notZero) {
      result += numbers[i];
      notZero = true;
    }
  }

  result = parseInt(result);

  if (result >= 2**31-1 || result <= -(2 ** 31)) {
    return 0;
  }

  return result;
};

console.log(reverse(123));