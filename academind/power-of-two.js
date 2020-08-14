// Determine Whether an input number is a power of two;

function isPowerOfTwo(number) {
  if (number < 1) {
    return false
  }
  let dividedNumber = number
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false
    }
    dividedNumber = dividedNumber / 2
  }
  return true
}

// Best Case: number = 13 => O(1)1,125,
// Average Case: O(log n)
// Worst Case: 1,125,899,906,842,624 => O(log2 n)

// binary notation - bitwise operator (&)
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

function isPowerOfTwo(number) {
  if (number < 1) {
    return false
  }

  return (number & (number - 1)) === 0; // O(1)
}

console.log(isPowerOfTwo(8)) // true
console.log(isPowerOfTwo(5)) // false
console.log(isPowerOfTwo(20))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(13))