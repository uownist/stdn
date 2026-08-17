// count vowels

function countVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;

  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) vowelsCount++;
  }

  return vowelsCount;
}

const input = "JavaScript";
const output = countVowels(input);
console.log(output);
