function Calculate(num1, num2) {
    return num1 + num2
}

let n1 = parseInt(prompt('Input your first number'))
let n2 = parseInt(prompt('Input your second number'))

let summedNumbers = Calculate(n1, n2)

console.log(`The sum of ${n1} and ${n2} is ${summedNumbers}.`)