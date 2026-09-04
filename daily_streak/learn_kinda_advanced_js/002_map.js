words = ["cricket", "football", "programming"];

const singleWord = words.map((word) => word.toUpperCase());
console.log(singleWord);

// recap map
favGames = ["gta vi", "eFootball", "ea sports 27"];
games = favGames.map((game) => console.log(game));

const words = ["cat", "elephant", "dog", "giraffe"];
const longWords = words.filter((word) => word.length > 3);

console.log(longWords); // ["elephant", "giraffe"]
console.log(words); // ["cat", "elephant", "dog", "giraffe"] (বদলায়নি)
