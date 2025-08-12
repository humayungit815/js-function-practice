function validProposal(input1, input2) {
  if (typeof input1 !== "object" || typeof input2 !== "object") {
    return "Invalid";
  }
  if (input1.gender == input2.gender) {
    return false;
  }
  if (Math.abs(input1.age - input2.age) > 7) {
    return false;
  } else {
    return true;
  }
}
console.log(
  validProposal(
    { name: "Rahul", gender: "male", age: 28 },
    { name: "Joya", gender: "female", age: 21 }
  )
);
