function evenOdd(number) {
  for(i = 1; i < number; i++) {
    if (number % 2 === 0) {
      return true
    }
  }

  return false
}

console.log(evenOdd(6))
console.log(evenOdd(7))
console.log('odd', evenOdd(13))

// true for even
// false for odd

// Academind

function isEven(number) {
  // 1
  return number % 2 === 0; // 5 % 2 => 1, 4 % 2 => 0
}

// One Case: O(1)

console.log(isEven(2))
console.log(isEven(4))
console.log(isEven(7))
