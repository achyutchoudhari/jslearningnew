console.log("========== includes() =============== ");
var result = greet.includes('Morning');
console.log("Is Morning word available: ", result);
var result = greet.includes('nin');
console.log("Is nin word available: ", result);
var result = greet.includes('good');
console.log("Is good word available: ", result);

console.log("========== search() =============== ");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);