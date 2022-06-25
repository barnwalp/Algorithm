// Google Question
const arr1 = [2,5,1,2,3,5,1,2,4]      // returns 2
const arr2 = [2,1,1,2,3,5,1,2,4]      // returns 1
const arr3 = [2,2,4,5]                // returns undefined

function firstRecurringChar(input) {
  for (let i=1; i<input.length; i++) {
    for (let j=0; j+i<input.length; j++) {
      if (input[j] === input[j+i]) {
        return input[j];
      }
    }
  }
  return undefined;
}

function firstRecurringChar2(input) {
  let map = {};
  for (let i=0; i<input.length; i++) {
    // console.log(map);
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecurringChar(arr1));
console.log(firstRecurringChar(arr2));
console.log(firstRecurringChar(arr3));

// console.log(firstRecurringChar2(arr1));
// console.log(firstRecurringChar2(arr2));
// console.log(firstRecurringChar2(arr3));