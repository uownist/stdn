// সবচেয়ে বড় সংখ্যা বের করো

function findMax(numbers) {
  let maxNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) maxNum = numbers[i];
  }

  return maxNum;
}

const input = [-5, -1, -8];
const output = findMax(input);
console.log(output);
