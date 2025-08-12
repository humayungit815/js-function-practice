function countVowels(string) {
  count = 0;
  if (typeof string !== "string") {
    return "Invalid";
  }
  string = string.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      count++;
    }
  }
  return count++;
}
const str = 100;
const result = countVowels(str);
console.log(result);
