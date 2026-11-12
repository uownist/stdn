// sokol odd numbers alada kora
function oddNumbers(numbers) {
  const odd = [];

  for (const num of numbers) {
    if (num % 2 === 1) odd.push(num);
  }

  return odd;
}

const input = [5, 4, 5, 9, 8, 51];
const output = oddNumbers(input);
console.log(output);
