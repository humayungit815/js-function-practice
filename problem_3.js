function willSuccess(array) {
  let pass = 0;
  let fail = 0;
  if (Array.isArray(array) == false) {
    return "Invalid";
  }
  for (const arr of array) {
    if (arr >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  if (pass > fail) {
    return true;
  } else {
    return false;
  }
}
const number = [];
const result = willSuccess(number);
console.log(result);
