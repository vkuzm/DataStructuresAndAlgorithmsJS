
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurringCharacter([2,3,4,5]));
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]));

// Time Complexity = O(n)
// Space Complexity = O(n)
function firstRecurringCharacter3(input) {
  const set = new Set();
  for (let i = 0; i < input.length; i++) {
    if (set.has(input[i])) {
      return input[i];
    }
    set.add(input[i]);
  }
  return undefined;
}

// Time Complexity = O(n^2)
// Space Complexity = O(n)
function firstRecurringCharacter(input) {
  let minIndexRange = 0;
  let recurringCharacter = undefined;

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        const indexRange = j - i;

        if (minIndexRange === 0 || indexRange < minIndexRange) {
          minIndexRange = indexRange;
          recurringCharacter = input[i];
          break;
        }
      }
    }
  }
  return recurringCharacter;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2