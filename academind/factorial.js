function fact(number) {
  if (number === 1)
    return 1
  else
    return number * fact(number - 1)
}

console.log(fact(3)); // 3 * 2 * 1 = 6
console.log(fact(5));

// Academind

function fact1(number) {
  let result = 1
  for (let i = 2; i <= number; i++) {
    result = result + i
  }
  return result
}

// O(n)