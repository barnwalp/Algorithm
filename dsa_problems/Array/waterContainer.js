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

module.exports = {
	maxArea: maxAreaOptimized,
}
