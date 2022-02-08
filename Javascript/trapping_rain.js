// Problem:
// Given n non-negative integers representing an elevation map where the width of
// each bar is 1, compute how much water it can trap after raining.

// Constraint:
// 1. y-axis not to be considered for trapping water.
// 2. Array contains only not-negative numbers.
// 3. Minimum 1 number is present in the array

// Testcases:
let testCase1 = [4,3,3,9,3,0,9,2,8,3];        //23
let testCase2 = [2,3,2,1];                    //0
let testCase3 = [1,2];                        //0
let testCase4 = [0,1,0,2,1,0,1,3,2,1,2,1];    //6
let testCase5 = [3,2,1,2,4];                  //4
let testCase6 = [2,1,2];                      //1
let testCase7 = [3,2,1,2,4,2,1,3,6];          //10
let testCase8 = [1,0,1,3,2,1,2];              //2
let testCase9 = [4,2,0,3,2,5];                //9
let testCase10 = [9,6,8,8,5,6,3];             //3

// const trunc_desc = function(height) {
//   // lets modify the array to remove descending values at the end
//   let p = height.length-1;
//   while(p>0) {
//     if(height[p]<=height[p-1]) {
//       height.pop();
//     } else { 
//       break;
//     }
//     p--;
//   }
//   return height;
// }

// const trap_rain = function(height) {
//   height = trunc_desc(height);
//   console.log({height});
//   let p=1; pointer=0; tempArea=0; area=0;
//   while(p<height.length) {
//     if(height[p]>=height[pointer]) {
//       pointer=p;
//       p++;
//       area += tempArea;
//       tempArea=0;
//       console.log({area, tempArea});
//     } 
//     else {
//       tempArea += height[pointer]-height[p];
//       console.log({p, pointer, tempArea})
//       if(p==height.length-1) {
//         let offset = height[pointer]-height[p];
//         p=pointer+1;
//         while(p<height.length) {
//           if((height[pointer]-height[p]-offset)>0) {
//             area += height[pointer]-height[p]-offset;
//           }
//           console.log({area});
//           p++;
//         }
//       }
//       p++;
//     }
//   }
//   console.log(`area is ${area}`);
//   return area;
// }

const trapRainBf = function(height) {
  let area=0; value=0;
  let maxLeft=0; maxRight=0;
  for(let p=0; p<height.length; p++) {
    maxLeft = findLeft(p, height);
    maxRight = findRight(p, height);
    console.log({maxLeft, maxRight});
    value = Math.min(maxLeft, maxRight)-height[p];
    if(value<0) {
      value = 0;
    }
    area += value;
    console.log({value, area});
  }
  return area;
}

const findLeft = function(p, height) {
  let max = 0;
  for(let i=0; i<p; i++) {
    if(height[i] > max) {
      max = height[i];
    }
  }
  return max;
}

const findRight = function(p, height) {
  let max = 0;
  for(let i=p+1; i<height.length; i++) {
    if(height[i] > max) {
      max = height[i];
    }
  }
  return max;
}

// console.log(findLeft(4, testCase10));
// console.log(findRight(1, testCase10));
console.log(trapRainBf(testCase4));