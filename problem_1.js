/*function signature/sample */
function cashOut(money) {
  // You have to write your code here
  if (typeof money !== "number") {
    return "Invalid";
  }
  if (money < 0) {
    return "Invalid";
  }
  const cashOut = (money * 1.75) / 100;
  return cashOut;
}
const money = 20000;
const result = cashOut(money);
console.log(result);
