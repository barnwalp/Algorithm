const compareStringBf = function(s, t) {
  s = createString(s);
  t = createString(t);
  return s==t;
}

const createString = function(str) {
  new_str='';
  for(let i=0; i<str.length; i++) {
    if(str[i] != '#') {
      new_str += str[i];
    }
    else {
      new_str = new_str.slice(0,-1);
    }
  }
  return new_str;
}

const compareStringOptimized = function(s, t) {
  let p1=s.length-1, p2=t.length-1;
  while (p1>=0 || p2>=0) {
    if (s[p1] != '#' && t[p2] != '#') {
      if (s[p1] != t[p2]) {
        return false;
      }
      p1--;
      p2--;
    }
    if (s[p1] == '#') {
      let count=0;
      while (s[p1] == '#') {
        count++;
        p1--;
      }
      while (count>0) {
        if(s[p1] != '#') {
          p1--;
          count--;
        }
        else {
          p1--;
          count++;
        }
      }
    }
    if (t[p2] == '#') {
      let count=0;
      while (t[p2] == '#') {
        count++;
        p2--;
      }
      while (count>0) {
        if(t[p2] != '#') {
          p2--;
          count--;
        }
        else {
          p2--;
          count++;
        }
      }
    }
  }
  return true;
}

module.exports = {
	compareString: compareStringOptimized,
}
