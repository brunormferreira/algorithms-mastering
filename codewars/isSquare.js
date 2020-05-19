/*
Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the
square of an integer; in other words, it is the product of some integer with itself.
*/

const isSquare = () => {
  const perfectSqrt = Math.sqrt(n);
  
  if(perfectSqrt * perfectSqrt === n && Number.isInteger(perfectSqrt)) {
    return true;
  }

  return false;
}

// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

// best approach
// const isSquare = n => Number.isInteger(Math.sqrt(n));