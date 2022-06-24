// Create a function that reverse a string

function stringReversal(str) {
  if (!str || typeof(str) !== "string"){
    return 'Thats not good';
  }
  let reversed = [];
  let j=0
  for(let i=str.length-1; i>=0; i--) {
    reversed.push(str[i]);
    j++;
  }
  return reversed.join('');
}

function stringReversal2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(stringReversal('pankaj barnwal'));
console.log(stringReversal('p'));
console.log(stringReversal(''));