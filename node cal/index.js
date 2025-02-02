const crypto = require('crypto');

const args = process.argv.slice(2);
function calculate(operation, ...numbers) {
  numbers = numbers.map(Number);
  let result;
  switch (operation) {
    case 'add':
      result = numbers.reduce((acc, num) => acc + num, 0);
      break;
    case 'sub':
      result = numbers.reduce((acc, num) => acc - num);
      break;
    case 'mult':
      result = numbers.reduce((acc, num) => acc * num, 1);
      break;
    case 'divide':
      result = numbers.reduce((acc, num) => acc / num);
      break;
    case 'sin':
      result = Math.sin(numbers[0]);
      break;
    case 'cos':
      result = Math.cos(numbers[0]);
      break;
    case 'tan':
      result = Math.tan(numbers[0]);
      break;
    case 'random':
      if (numbers.length === 0) {
        console.log("Provide length for random number generation.");
        return;
      }
      const length = numbers[0];
      if (!Number.isInteger(length) || length <= 0) {
        console.log("Invalid length for random number generation.");
        return;
      }
      const randomBytes = crypto.randomBytes(length);
      result = randomBytes.toString('binary');
      break;
    default:
      console.log("Invalid operation.");
      return;
  }
  console.log("Result:", result);
}


if (args.length < 2) {
  console.log("Invalid arguments. Usage: node index.js <operation> <num1> <num2> ... <numN>");
} else {
  const [operation, ...numbers] = args;
  calculate(operation, ...numbers);
}
