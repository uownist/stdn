// bracket thik moto dewa hoyeche kina ta dekha
function isValid(s) {
  const stack = [];

  const bracketParis = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();

      if (lastOpenBracket !== bracketParis[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const input = "()";
const output = isValid(input);
console.log(output);

/**
 * note: ei problem er ami aga matha gora h**a kicchui buji nai :) plz map kardejiye
 */

// even or odd
function evenOrOdd(num) {
  return num % 2 === 0;
}

console.log(evenOrOdd(23));
