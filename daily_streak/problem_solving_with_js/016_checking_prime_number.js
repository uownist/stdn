function isPrime(num) {
  // number ta zodi 2 theke choto hoy (like 1 or 0 or negative number) tahole seita prime number nah (hoy negative)
  if (num < 2) return false;

  for (let n = 2; n <= Math.sqrt(num); n++) {
    if (num % n === 0) return false;
  }

  return true;
}

const input = 17;
const output = isPrime(input);
console.log(output);
