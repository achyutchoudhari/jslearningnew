console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);

console.log("========== split() =============== ");
var result = greet.split(" ");
console.log(result);

//WAP to count the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log('Total words is: ', words.length);
// console.log(typeof words);

// String template
console.log(`I am "UI" Developer `);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`);