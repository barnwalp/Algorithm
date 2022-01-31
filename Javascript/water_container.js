// Problem:
// You are given an array 'height' of positive integers where each
// integer represents the height of a vertical line on a chart.

// Find two lines which together with the x-axis forms a container
// that would hold the greatest amount of water. Return the area of
// water.

// Constraints:
// 1. x-axis not to be considered as a line
// 2. Minimum two numbers are present in the array
// 3. height can have values as zero

// Test Cases:
const testCase1 = [0,0]                 //0
const testCase2 = [3,4]                 //3
const testCase3 = [1,2,3,6,4,7]         //18
const testCase4 = [1,8,6,2,5,4,8,3,7]   //49