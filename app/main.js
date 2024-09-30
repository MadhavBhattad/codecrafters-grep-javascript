function matchPattern(inputLine, pattern) {
  try {
      // Directly create the RegExp object using the provided pattern
      let regex = new RegExp(pattern);
      return regex.test(inputLine); // Test if the input matches the pattern
  } catch (e) {
      console.error("Invalid regular expression");
      return false;
  }
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
      console.log("Expected first argument to be '-E'");
      process.exit(1);
  }

  // Test the input line against the pattern
  if (matchPattern(inputLine, pattern)) {
      process.exit(0); // Match found
  } else {
      process.exit(1); // Match not found
  }
}

main();
