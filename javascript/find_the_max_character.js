// find in the string the most common character
// ex. cooking = "o", lara = "a"

function mostCommonCharacter(str) {
  const charHolder = {};

  str
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (char != " ") {
        if (charHolder[char] == null) {
          charHolder[char] = 1;
        } else {
          charHolder[char] += 1;
        }
      }
    });
  let highest_num = 0;
  let letter = "";
  for (const key in charHolder) {
    if (charHolder[key] > highest_num) {
      highest_num = charHolder[key];
      letter = key;
    }
  }
  return letter;
}

const x = mostCommonCharacter("abbbcddefffg");
console.log(x);
