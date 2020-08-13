function fib(num) {
  const numbers = [1, 1] // 1
  for (let i = 2; i < num + 1; i++) { // 1
    numbers.push(numbers[i - 2] + numbers[i - 1]) // n -1
  }
  // console.log(numbers)
  return numbers[num] // 1
}

// => O(n) => Linear Time Complexity

console.log(fib(4)) // 5
console.log(fib(5)) // 8