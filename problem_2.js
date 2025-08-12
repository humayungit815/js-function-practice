function validContact(string) {
  if (typeof string !== "string") {
    return "Invalid";
  }
  if (string.length !== 11) {
    return false;
  } else if (string.startsWith("01") !== true) {
    return false;
  } else if (string.includes(" ") == true) {
    return false;
  } else {
    return true;
  }
}
const number = "01788 09761";
const result = validContact(number);
console.log(result);
