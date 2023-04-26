# Javascript Algorithm Questions

```
   _____  .__                       .__  __  .__                    
  /  _  \ |  |    ____   ___________|__|/  |_|  |__   _____   ______
 /  /_\  \|  |   / ___\ /  _ \_  __ \  \   __\  |  \ /     \ /  ___/
/    |    \  |__/ /_/  >  <_> )  | \/  ||  | |   Y  \  Y Y  \\___ \ 
\____|__  /____/\___  / \____/|__|  |__||__| |___|  /__|_|  /____  >
        \/     /_____/                            \/      \/     \/ 
```

## Table of Contents

1. [Array](#array)
   1. [Two Sum](#two-sum)
   2. [Water Container](#water-container)
   3. [Trapping Rain Water](#trapping-rain-water)
2. [String](#string)

### Array

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

**[⬆ back to top](#table-of-contents)**

#### Water Container

**Problem**: You are given an array `height` of positive integers where each integer represents the height of a vertical line on a chart. Find two line which together with the x axis forms a container that would hold the greatest amount of water. Returns the area of water.

**Constraint/Assumption:**

1. y-axis not to be considered as a line
2. Minimum two numbers are present in the array.
3. Height can have values as zero

**Solution**:

![001](assets/2023-04-25-000330.jpg)

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

**[⬆ back to top](#table-of-contents)**

#### Trapping Rain Water

**Problem:**  Given n non-integers representing an elevation map where width of each bar is 1, compute how much water it can trap after raining.

**Constraint/Assumption:**

1. y-axis not to be considered for trapping water
2. Array contains only non-negative numbers.
3. Minimum 1 number is present in the array.

**Solution:**

In order to get the trapped water at index `i`, you have to know the height of left and right bars to get `maxL` and `maxR`, whereas

`maxL` = largest bar in the left side of the index	

`maxR` = largest bar in the right side of the index

and then calculate the trapped water at each index. Although this method results in O(n) time complexity, which is optimal. however in this method, you have to create 3 arrays for each index (`maxL`,` maxR` and `min(maxL, maxR)`). This will result in space complexity of O(n). 

However space complexity of O(1) can be achieved if instead of one pointer, two pointer mechanism is used.

![002](assets/2023-04-25-000333.jpg)

![003](assets/2023-04-25-000334.jpg)

```javascript
function trapRain(height) {
	let trappedWater = 0;
  let area = 0;
  let pl = 0;
  let pr = height.length-1;
  let maxPl = 0;
 	let maxPr = 0;
  while (pl < pr) {
    if(height[pl] <= height[pr]) {
      trappedWater = Math.max((maxPl - height[pl]), 0)
      area += trappedWater;
      pl++;
    } else {
      trappedWater = Math.max((maxPr - height[pr]), 0)
      area += trappedWater;
      pr--;
    }
  }
  return area;
}
```

**[⬆ back to top](#table-of-contents)**

#### Is Unique

**Problem:** Implement an algorithm to determine if a string has all unique characters. 

**Constraint/Assumption:** 

1. Strings are ASCII strings instead of unicode

**Solution:** 

```javascript
function isUnique(text) {
  const charSet = new Set();
  for (let char of text) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
```

**[⬆ back to top](#table-of-contents)**

#### Rotate Matrix

**Problem:** Given a Matrix of NxN size, write a method to rotate the matrix by 90 degrees 

**Constraint/Assumptions:**

1. Matrix will contain only integer values
2. no of rows and columns are equal

**Solution:**

![004](assets/2023-04-26-000335.jpg)

```javascript
function rotateMatrix(matrix) {
  let l = 0;
  let r = matrix.length-1 
  let temp = 0;
  while (l < r) {
    for (i=0; i<r-l; i++) {
      let top = l;
      let bottom = r;
      temp = matrix[top][l+i];
      matrix[top][l+i] = matrix[bottom-i][l];
      matrix[bottom-i][l] = matrix[bottom][r-i];
      matrix[bottom][r-i] = matrix[top+i][r];
      matrix[top+i][r] = temp;
    }
    l++;
    r--;
  }
  return matrix;
}
```

### String



