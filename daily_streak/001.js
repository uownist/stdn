/**
 * ============================
 * string methods
 * ============================
 */

// 1. clean email
function cleanEmail(email) {
  return email.trim().toLowerCase();
}

console.log(cleanEmail("   Im@Uownist.Com   "));

console.log("\n");

// 2. is image file
function isImageFile(filename) {
  lowerfileName = filename.toLowerCase();

  if (lowerfileName.endsWith(".png") || lowerfileName.endsWith(".jpg"))
    return true;

  return false;
}

console.log(isImageFile("ma_dp.png"));
console.log(isImageFile("linkedin_dp.webp"));

console.log("\n");

// 3. shorten text
function shortenText(text, maxLength) {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  } else {
    return text;
  }
}

console.log(shortenText("uownist", 5));

console.log("\n");

// 4. detect bad words
function containsBadWord(text) {
  if (text.toLowerCase().includes("bad")) return true;

  return false;
}

console.log(containsBadWord("This is BAD."));
console.log(containsBadWord("This is good btw."));

console.log("\n");

// 4. make slug
function makeSlug(title) {
  return title.toLowerCase().trim().split(" ").join("-");
}

console.log(makeSlug("   js is fun  "));
console.log(makeSlug("Hello World"));
console.log(makeSlug("one"));
