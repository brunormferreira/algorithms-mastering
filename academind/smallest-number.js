// [3, 1, 2]
function smallest(numbers) {
  let min = numbers[0]

  for (i = 0; i < numbers.length; i++) {
    let idxValue = numbers[i]

    min = (idxValue < min) ? idxValue : min
  }

  return parseInt(min)
}

console.log(smallest([3, 1, 2]))
console.log(smallest([10, 20, 11, 33, 45, 8, 0, 3, 1, 2, -90]))

// Academind

function getMin(numbers) {
  let currentMin = numbers[0] // 1
  for (const num of numbers) { // 1
    if (num < currentMin) { // n
      currentMin = num // 0 (Best Case), 2 (Worst Case), 1 (Avg. Case)
    }
  }
  return currentMin // 1
}

// Best Case: [1, 2, 3] => O(n)
// Worst Case: [3, 2, 1] => O(n)
// Average Case: [2, 1, 3] => O(n)


console.log(getMin([1, 2, 3]))
console.log(getMin([9, 8, 3, 5, 1]))
console.log(getMin([10, 8, 3, 6]))

// __________________________________________________________

// https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621

// const array = [37, -5, -15, -37, 5, 15]

// array.sort((a,b) => a - b) // Sort numerically, ascending
// console.log(array.join(", ")) // -37, -15, -5, 5, 15, 37

// const min = array[0]
// const max = array[array.length - 1] // length retorna o tamanho do array, e passando -1, ele pega o max, pq o array começa com index 0, e estamos passando o seu ultimo index ao passar -1.

// console.log(`Minimum: ${min}, Maximum: ${max}`) // Minimum: -37, Maximum: 37