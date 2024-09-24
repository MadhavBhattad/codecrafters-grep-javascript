function matchPattern(inputLine, pattern) {
  // Replace all occurrences of \d and \w in the pattern using regular expressions
  let regex = pattern
      .replace(/\\d/, '[0-9]')          // Replace \d with [0-9] to match digits
      .replace(/\\w/, '[0-9a-zA-Z]');   // Replace \w with [0-9a-zA-Z] to match word characters
  
  // Create a new RegExp from the modified pattern
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
