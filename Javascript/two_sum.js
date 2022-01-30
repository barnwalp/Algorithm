// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

// Constraint:
// 1. There could at most one solution
// 2. It should return null when it does not found any solution.
// 3. There is no negative integer in the nums array
// 4. There is no duplicate values in the nums array

// Test Cases:
// [1, 2, 7, 9, 2]   t=11    [3, 4]
// [1, 3, 7, 9, 2]   t=25    null
// []                t=1     null
// [5]               t=5     null
// [1, 6]            t=7     [0, 1]

function two_sum(nums, target) {
  for(let [index_1, value_1] of nums.entries()) {
    desired_val = target - value_1;
    // console.log(`loop: ${index_1+1} desired value: ${desired_val}`);
    for(let [index_2, value_2] of nums.slice(index_1+1).entries()){
      // console.log(`actual value: ${value_2}`);
      if (value_2 == desired_val) {
        return [index_1, (index_2+index_1+1)];
      }
    }
  }
  return null;
}

console.log(two_sum([5], 9));