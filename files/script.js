// Declared variables
const num1 = 10
const num2 = 20
const num3 = 30
const num4 = 40
const num5 = 50

// Function that takes 5 arguments
function analyzeNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e]

  let sum = 0
  let max = numbers[0]
  let min = numbers[0]

  for (const num of numbers) {
    sum += num

    if (num > max) {
      max = num
    }

    if (num < min) {
      min = num
    }
  }

  return {
    sum,
    average: sum / numbers.length,
    max,
    min,
  }
}

// Store the returned value
const result = analyzeNumbers(num1, num2, num3, num4, num5)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
console.log(result)
