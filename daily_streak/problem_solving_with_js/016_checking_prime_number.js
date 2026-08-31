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

console.log("\n");

// without math.sqrt
function checkPrime(number) {
  if (number < 2)
    return `hell youuu..! ${number} ta 2 er theke choto. 2 er theke boro number de nig**a`;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return "hell nah..! ${number} is not a prime bruhhh";
  }

  return `yeh, ${number} ta hoilo prime number btw :)`;
}

console.log(checkPrime(17));
