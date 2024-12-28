const StringCalculator = require("./StringCalculator");

let calculator=new StringCalculator();

console.log(calculator.Add(""));
console.log(calculator.Add("1"));
console.log(calculator.Add("1,2,3,4,4,4,4,4,4,4,4"));
console.log(calculator.Add("1,2\n4\n5"));
