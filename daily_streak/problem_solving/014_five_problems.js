// get fullname
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Shahed", "Bishwas"));

console.log("\n");

// capitalize word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitalize("mazharul"));
