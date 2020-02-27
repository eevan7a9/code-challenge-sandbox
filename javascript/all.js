// validate palindrome
const is_palindrome = text =>
  (reverse_text =
    text
      .split("")
      .reverse()
      .join("") === text);
// let palindrome = is_palindrome("wow");
// console.log(palindrome);

// reverse string
const reverse_string = text =>
  text
    .split("")
    .reverse()
    .join("");
// let text_reversed = reverse_string('Hello World');
// console.log(text_reversed);

// integer_reversal
const reverse_int = number =>
  parseInt(
    String(number)
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(number);
// let number_reversed = reverse_int(-234);
// console.log(number_reversed);

// most common chars in a string
const most_common_char = string => {
  const text_array = string.split("");

  const char_holder = {};

  text_array.forEach(char => {
    if (!char_holder[char]) {
      char_holder[char] = 1;
    } else {
      char_holder[char]++;
    }
  });

  let highest_number = 0;
  let letter = "";
  for (key in char_holder) {
    if (char_holder[key] && key != " ") {
      if (char_holder[key] > highest_number) {
        highest_number = char_holder[key];
        letter = key;
      } else if (char_holder[key] === highest_number) {
        letter += "," + key;
      }
    }
  }
  // return char_holder;
  return letter;
};

// const x = is_palindrome("ews");
// const x = reverse_string("humansd");
// const x = reverse_int(2323);
// const x = most_common_char("trarsssrddddd");
console.log(x);
