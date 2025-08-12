function calculateSleepTime(array) {
  let sum = 0;

  for (const arr of array) {
    sum = sum + arr;
    if (typeof arr !== "number") {
      return "Invalid";
    }
  }
  let sleepSecond = sum;
  let hour = Math.floor(sleepSecond / 3600);
  sleepSecond = sleepSecond % 3600;
  let minute = Math.floor(sleepSecond / 60);
  sleepSecond = sleepSecond % 60;

  const time = {
    hour: hour,
    minute: minute,
    second: sleepSecond,
  };
  return time;
}

const input = [100, 3800, 90];
const result = calculateSleepTime(input);
console.log(result);
