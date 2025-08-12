function sumOfArray(array) {
  let sum = 0;
  if (Array.isArray(array) == false) {
    return "Invalid";
  }
  for (const arr of array) {
    if (typeof arr !== "number") {
      return "Invalid";
    }
    sum = sum + arr;
  }
  return sum;
}
const arr = [1, 2, 3, 4, 5];
const result = sumOfArray(arr);
console.log(result);
