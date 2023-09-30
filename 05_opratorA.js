


console.log('______________Step1__________');

function squareOfWordLength(value){
    console.log(`Value is: ${value}`);
    console.log(`Length of the word is: ${value.length}`);
    console.log(`Square pf the length of given value is: ${value.length*value.length} `);
}

console.log('=First Value=');
squareOfWordLength("JavaScript");
console.log('=Second Value=');
squareOfWordLength("Google Chrome");
console.log('==Third Value=');
squareOfWordLength("Developer Smart");


console.log('______________Step2__________');

function StringValue(){
    var newString='I am Angular Developer';
   
    console.log(`Given string is: ${newString}`);
    
    var lengthOfStr= newString.length;
    
    console.log(`String length is: ${lengthOfStr}`);
    
    var splittedValue=newString.split(' ')
    
    console.log(`Splitted string: ${splittedValue}`);
   
    var wordOfStrAfterSplit=newString.split(' ').length;
    
    console.log(`Number of words after splitting the string: ${wordOfStrAfterSplit}`);
    
    console.log(`String length divided by total number of words: ${lengthOfStr/wordOfStrAfterSplit}`);
    
    console.log(`Multiplying String after length by number of words: ${lengthOfStr*wordOfStrAfterSplit}`);

}
StringValue();


console.log('-----------------------------Akshay Parakh Assignment02------------------------------');


console.log('______________Step1__________');


function greaterNumber(num1,num2){
    var one=num1;
    var two=num2;
    console.log(`The given number are: ${one} and ${two}`);
    var result = one>two ? one : two;
    console.log(`The greater number is ${result}`);
}

console.log('--------------------To find greater number---------------------');

console.log('--------------------for number 10,-10---------------------');

greaterNumber(10,-10);

console.log('--------------------for number 800,899---------------------');

greaterNumber(800,899);



console.log('______________Step2__________');


console.log('--------------------To find OddEven number---------------------');

function isEvenOrOddNum(num){

   

   var Number1=num;
   
   var result= Number1%2 == 0 ? "EVEN" : "ODD";
   console.log(`The given number is: ${Number1}`);
   return result;

}

var oddOrEven= isEvenOrOddNum(24);

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= isEvenOrOddNum(44);

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= isEvenOrOddNum(0);

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= isEvenOrOddNum(101);

console.log(`It is a ${oddOrEven} number`);

console.log('______________Step3__________');

console.log('--------------------To find oddEven of the words length----------------------');

function wordLength(word1){

   var wordIs=word1;
   var lenWord=wordIs.length;
   console.log(`lenght of the word is: ${word1.length}`);

   var result= lenWord%2 == 0 ? "EVEN" : "ODD";
   console.log(`The given number is: ${word1}`);
   return result;
   
}


var oddOrEven= wordLength('JavaScript');

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');


var oddOrEven= wordLength('Developer');

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= wordLength('Google');

console.log(`It is a ${oddOrEven} number`);