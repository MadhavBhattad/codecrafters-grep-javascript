function matchPattern(inputLine, pattern) {
  try {
      // Directly use the pattern as is without modification
      let regex = new RegExp(pattern); // Create a RegExp object from the input pattern
      return regex.test(inputLine); // Test if the input matches the regex pattern
  } catch (error) {
      console.error("Invalid regex pattern");
      return false; // Return false if the regex creation fails
  }
}

function main() {
  // Make sure the first argument is '-E'
  if (process.argv[2] !== '-E') {
      console.log("Expected first argument to be '-E'");
      process.exit(1);
  }

  const pattern = process.argv[3]; // Get the pattern from the command line arguments
  const inputLine = require('fs').readFileSync(0, 'utf-8').trim(); // Read the input line from stdin and trim any extra spaces

  // Match the input line with the pattern
  if (matchPattern(inputLine, pattern)) {
      process.exit(0); // Exit with code 0 if the pattern matches
  } else {
      process.exit(1); // Exit with code 1 if the pattern does not match
  }
}

main();
