


let add = function (){
    console.log(`inside function expression`);

}
add ();
let arrowFun = ()=> {
    console.log(`inside arrow function...`);

}

arrowFun()
let sub = (num1,num2)=>{
    console.log(`subtraction is :${num1-num2}`);
}
sub (20,10)

let square = (num)=>{
let result = num * num ;
return result;
}
let result = square(7);
console.log(`square of 7 is : ${result}`);



