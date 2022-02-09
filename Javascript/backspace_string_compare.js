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
let s7='abc'; t7='bcd';           //false
let s8='pqr#'; t8='pqpr#';        //false