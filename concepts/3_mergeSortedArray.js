function mergeSortedArray(arr1, arr2) {
  arr1.push(Infinity);
  arr2.push(Infinity);
  var i = 0;
  var j = 0;
  var sortedArr = [];
  while((i+j) < arr1.length+arr2.length-2) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  return sortedArr;
}

console.log(mergeSortedArray([0,3,4,31], [4,6,30]));
console.log(mergeSortedArray([0,4], [6,12,24]));
console.log(mergeSortedArray([0,4], []));
console.log(mergeSortedArray([], [0,0,0,0]));
