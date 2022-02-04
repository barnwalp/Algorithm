// Problem:
// Given n non-negative integers representing an elevation map where the width of
// each bar is 1, compute how much water it can trap after raining.

// Constraint:
// 1. y-axis not to be considered for trapping water.
// 2. Array contains only not-negative numbers.
// 3. Minimum 1 number is present in the array

// Testcases:
let testCase1 = [1];                          //0
let testCase2 = [2,3,2,1];                    //0
let testCase3 = [1,2];                        //0
let testCase4 = [0,1,0,2,1,0,1,3,2,1,2,1];    //6
let testCase5 = [3,2,1,2,4];                  //6
let testCase6 = [2,1,2];                      //1

const trap_rain = function(height) {
  // lets modify the array to remove descending values at the end
  let p = height.length-1;
  while(p>0) {
    if(height[p]<=height[p-1]) {
      height.pop();
    } else { 
      break;
    }
    p--;
  }

  p=1;
  let pointer=0; tempArea=0; area=0;
  while(p<height.length-1) {
    if(height[p]>height[pointer]) {
      pointer=p;
      p++;
      area += tempArea;
      tempArea=0;
    } else {
      tempArea += height[pointer]-height[p];
      p++;
      if(p==height.length-1) {
        let offset = height[pointer]-height[p];
        p=pointer+1;
        while(p<height.length-1) {
          if((height[pointer]-height[p]-offset)>0) {
            area += height[pointer]-height[p]-offset;
            p++;
          }
        }
      }
    }
  }
  return area;
}

console.log(trap_rain(testCase6));