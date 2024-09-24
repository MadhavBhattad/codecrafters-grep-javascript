function matchPattern(inputLine, pattern) {
  // Replace all \d with [0-9] and \w with [a-zA-Z0-9_]
  let regexPattern = pattern
    .replace(/\\d/g, '[0-9]')         // Replace all occurrences of \d
    .replace(/\\w/g, '[a-zA-Z0-9_]'); // Replace all occurrences of \w

  // Create a new RegExp object to match the entire string (from start to end)
  const regex = new RegExp('^' + regexPattern + '$');
  
  // Test if the inputLine matches the pattern
  return regex.test(inputLine);
}

function main() {
  const pattern = process.argv[3];
  const inputLine = require("fs").readFileSync(0, "utf-8").trim();

  if (process.argv[2] !== "-E") {
    console.log("Expected first argument to be '-E'");
    process.exit(1);
  }

  // You can use print statements as follows for debugging, they'll be visible when running tests.
  console.log("Logs from your program will appear here");

  // Uncomment this block to pass the first stage
  if (matchPattern(inputLine, pattern)) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main();
