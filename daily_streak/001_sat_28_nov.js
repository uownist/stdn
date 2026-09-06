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
