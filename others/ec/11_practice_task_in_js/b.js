// odd and even number
function getEveneOrOdd(num) {
  if (num % 2 === 0) return `${num} is even`;

  return `${num} is odd`;
}

console.log(getEveneOrOdd(25));
