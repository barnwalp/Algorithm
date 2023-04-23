// Problem:
// Given two strings 2 and t, return true if they are equal when both
// are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue
// empty.

// Constraints:
// 1. 1 <= s.length, t.length <=200
// 2. s and t are both lowercase letters and '#' characters

// Testcases:
let s1='a#c'; t1='b';             //false
let s2='ab##'; t2='c#d#';         //true
let s3='ab#c'; t3='ad#c';         //true
let s4='m###'; t4='y#';           //true
let s5='#pp'; t5='##pp';          //true
let s6='#'; t6='###########';     //true
let s7='a##x###'; t7='b##';           //false
let s8='pqr#'; t8='pqpr#';        //false
let s9='bxj##tw'; t9='bxo#j##tw'; //false

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

console.log(compareStringOptimized(s1,t1));
console.log(compareStringOptimized(s2,t2));
console.log(compareStringOptimized(s3,t3));
console.log(compareStringOptimized(s4,t4));
console.log(compareStringOptimized(s5,t5));
console.log(compareStringOptimized(s6,t6));
console.log(compareStringOptimized(s7,t7));
console.log(compareStringOptimized(s8,t8));
console.log(compareStringOptimized(s9,t9));