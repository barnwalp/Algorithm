## Javascript Algorithm Questions

### Two Sum

**Problem:** Given an array of integers, `nums` and an integer, `target`, return indices of the two number such that they add up to `target`.

**Constraint/Assumption:**

1. There could at most be one solution.
2. Program should return null when it does not found any solution.
3. There are no negative integer in the `nums` array.
4. There is no duplicate values in the `nums` array.

**Solution:**

```javascript
function twoSum(nums, target) {
  const hashMap = {};
  for (let index=0; index<nums.length; index++) {
    let value = nums[index];
    // hashMap has the value
    if(hashMap[value] !== undefined) {
      return [index, hashMap[value]];
    }
    let numToFind = target - nums[index];
    hashMap[numToFind] = index;
  }
  return null;
}
```

