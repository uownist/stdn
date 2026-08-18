// array theke even numbers gulo alada korte hobe

function evenNumbers(numbers) {
  evenNums = [];

  for (const num of numbers) {
    if (num % 2 === 0) evenNums.push(num);
  }

  return evenNums;
}

const input = [3, 5, 69, 8, 4, 53, 6];
const output = evenNumbers(input);
console.log(`"${input}" even numbers: ${output}`);
