function twoSumOptimized(nums, target) {
  const hashMap = {}
  for(let p=0; p<nums.length; p++) {
    value = nums[p];
    // Checking whether the hashMap contains the target value
    if(hashMap[value] !== undefined) {
      return [p, hashMap[value]];
    }
    // Creating hashMap
    let numToFind = target - nums[p];
    hashMap[numToFind] = p;
  }
  return null;
};

module.exports = {
	twoSum: twoSumOptimized,
}
