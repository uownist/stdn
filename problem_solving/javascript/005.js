// find second largest number in an array
function findSecndLargestNumber(numbers) {
  let firstLargestNumber = -Infinity;
  let secondLargestNumber = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > firstLargestNumber) {
      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = numbers[i];
    } else if (
      numbers[i] > secondLargestNumber &&
      numbers[i] !== firstLargestNumber
    ) {
      secondLargestNumber = numbers[i];
    }
  }

  if (secondLargestNumber === -Infinity) return null;

  return secondLargestNumber;
}

const input = [3, 9, 2, 7];
const output = findSecndLargestNumber(input);
console.log(output);
