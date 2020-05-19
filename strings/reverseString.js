// oi - io
// bruno - onurb

// const reverseStringWithReverse = (param) => {
//   let splitString = param.split('');
//   let reverseArray = splitString.reverse();
//   let result = reverseArray.join('');
//   return result;
// }

// one line
// const reverseStringWithReverse = (param) => param.split('').reverse().join('');

// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

// =============================
// ===== WITH DONT USE REVERSE
// =============================
function reverse(str){
  let reversed = '';

  for(let value of str){
    reversed = value + reversed
    console.log(reversed)
  }

  return reversed;
}

// console.log(reverse('bruno'))

// function toReverse(word){
//   let str = word.split('');
//   let finalString = [];
//   for(i = 0; i<=str.length; i++){
//       finalString[i] = str[str.length - i];
//   }
//   console.log(finalString.join(''))
// }
