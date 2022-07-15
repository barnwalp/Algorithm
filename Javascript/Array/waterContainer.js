// Problem:
// You are given an array 'height' of positive integers where each
// integer represents the height of a vertical line on a chart.

// Find two lines which together with the x-axis forms a container
// that would hold the greatest amount of water. Return the area of
// water.

// Constraints:
// 1. y-axis not to be considered as a line
// 2. Minimum two numbers are present in the array
// 3. height can have values as zero

// Test Cases:
const testCase1 = [0,0]                 //0
const testCase2 = [3,4]                 //3
const testCase3 = [1,2,3,6,4,7]         //12
const testCase4 = [1,8,6,2,5,4,8,3,7]   //49

const maxAreaBf = function(height) {
  area=0;
  for(p1=0; p1<height.length; p1++) {
    for(p2=p1+1; p2<height.length; p2++) {
      temp_area = findArea(height,p1,p2);
      if (area<temp_area) {
        area = temp_area;
      }
    }
  }
  return area;
}

const findArea = function(height, p1, p2) {
  base = p2-p1;
  height = Math.min(height[p1], height[p2]);
  return base*height;
}

const maxAreaOptimized = function(height) {
  area = 0;
  let p1=0;
  let p2=height.length-1;
  while(p1<p2) {
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

console.log(maxAreaOptimized(testCase1));
console.log(maxAreaOptimized(testCase2));
console.log(maxAreaOptimized(testCase3));
console.log(maxAreaOptimized(testCase4));