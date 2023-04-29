const trapRainBf = function(height) {
  let area=0; value=0;
  let maxLeft=0; maxRight=0;
  for(let p=0; p<height.length; p++) {
    maxLeft = findLeft(p, height);
    maxRight = findRight(p, height);
    // console.log({maxLeft, maxRight});
    value = Math.min(maxLeft, maxRight)-height[p];
    value = Math.max(value, 0);
    area += value;
    // console.log({value, area});
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

const createMaxLeft = function(h) {
  let maxValue=0; maxLeft=[0];
  for(let i=1; i<h.length; i++) {
    if (h[i-1]>maxValue) {
      maxValue = h[i-1];
    }
    maxLeft.push(maxValue);
  }
  return maxLeft;
}

const createMaxRight = function(h) {
  h = h.slice().reverse();
  let maxRight=[];
  maxRight = createMaxLeft(h);
  return maxRight.reverse();
}

const trapRain = function(height) {
  let area=0; value=0;
  let maxLeftArray=createMaxLeft(height);
  let maxRightArray=createMaxRight(height);
  // console.log({height, maxLeftArray, maxRightArray});
  for(let p=0; p<height.length; p++) {
    value = Math.min(maxLeftArray[p], maxRightArray[p])-height[p];
    value = Math.max(value, 0);
    area += value;
    // console.log({p, value, area});
  }
  return area;
}

const trapRainOptimized = function(height) {
  let value=0; area=0;
  let pl=0; pr=height.length-1;
  let maxPl=0; maxPr=0;
  while(pl<pr) {
    if(height[pl]<=height[pr]) {
      value = maxPl-height[pl];
      value = Math.max(value, 0);
      area += value;
      maxPl = Math.max(maxPl, height[pl]);
      pl++;
    }
    else {
      value = maxPr-height[pr];
      value = Math.max(value, 0);
      area += value;
      maxPr = Math.max(maxPr, height[pr]);
      pr--;
    }
  }
  return area;
}

module.exports = {
	trapRain: trapRainOptimized,
}
