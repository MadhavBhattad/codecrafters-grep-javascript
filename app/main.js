function matchPattern(inputLine, pattern) {
  // Replace all occurrences of \d and \w in the pattern
  let regex = pattern
    .replace(/\\d/g, '[0-9]')         // Global replacement for \d (digits)
    .replace(/\\w/g, '[0-9a-zA-Z]');  // Global replacement for \w (word characters)

  // Use the regex to test against the input line
  return new RegExp(regex).test(inputLine);
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
