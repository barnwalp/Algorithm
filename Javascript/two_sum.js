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

function twoSumBf1(nums, target) {
  for(let [index1, value1] of nums.entries()) {
    desiredVal = target - value1;
    // console.log(`loop: ${index1+1} desired value: ${desiredVal}`);
    for(let [index2, value2] of nums.slice(index1+1).entries()){
      // console.log(`actual value: ${value_2}`);
      if (value2 == desiredVal) {
        return [index1, (index2+index1+1)];
      }
    }
  }
  return null;
}

const twoSumBf2 = function(nums, target) {
  for(let p1=0; p1<nums.length; p1++) {
    numberToFind = target - nums[p1];
    for(p2=p1+1; p2<nums.length; p2++){
      if (nums[p2] == numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
};

const twoSumOptimized = function(nums, target) {
  const hashMap = {}
  for(let p1=0; p1<nums.length; p1++) {
    value = nums[p1];
    if(hashMap[value] !== undefined) {
      return [p1, hashMap[value]];
    }
    let numToFind = target - nums[p1];
    hashMap[numToFind] = p1;
  }
  return null;
};

// console.log(twoSumBf1([5,4,3,2,1], 9));
// console.log(twoSumBf2([1,3,6,5], 9));
// console.log(twoSumOptimized([1,3,7,9,2], 11));
console.log(twoSumOptimized([3,3,2,5], 6));