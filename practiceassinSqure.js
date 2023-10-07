console.log(`++++++++++++++assigignment squre +++++++++++++`);

var square = function (val) {
    return val * val

}
var result = square (5);
console.log(`squre of 5 is :${result}`);
var result = square (236);
console.log(`squre of 236 is : ${result}`);

var result = square (3);
console.log(`squre of 3 is : ${result}`);
var result = square (6);
console.log(`squre of 6 is : ${result}`);

console.log(`type of squre :`,typeof square);



var rectangle = function (l ,w ) {
    return l * w;
}
var result = rectangle (36,21);
console.log(`area of rectangle is: ${result}` );

console.log(`type of rectangle :`,typeof rectangle);


var swapValues = function (val1, val2) {
    var temp = val1;
    val1 = val2;
    val2 = temp;
    return [val1, val2];
  };
  var result = swapValues("Mahi", "Raina");
  console.log(`Swapping this value "Mahi" & "Raina": ${result} `);














