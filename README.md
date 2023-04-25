## Javascript Algorithm Questions

#### Two Sum

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
    // if hashMap has the value
    if(hashMap[value] !== undefined) {
      return [index, hashMap[value]];
    }
    let numToFind = target - nums[index];
    hashMap[numToFind] = index;
  }
  return null;
}
```

#### Water Container

**Problem**: You are given an array `height` of positive integers where each integer represents the height of a vertical line on a chart. Find two line which together with the x axis forms a container that would hold the greatest amount of water. Returns the area of water.

**Constraint/Assumption:**

1. y-axis not to be considered as a line
2. Minimum two numbers are present in the array.
3. Height can have values as zero

**Solution**:

![001](assets\2023-04-25-000330.jpg)

```javascript
function waterContainer(height) {
  let area = 0;
  let tempArea = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  while (p1 < p2) {
    tempArea = (p2-p1)*(Math.min(height[p1], height[p2]));
    area = Math.max(area, tempArea);
    if (height[p1] < height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return area;
}
```

