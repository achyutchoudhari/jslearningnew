let array = [10, 20, 30, 40, 50, 60];
console.log(typeof array);
console.log(array);

console.log(`Total elements in array is : ${array.length}`);

console.log(`=========== Accessing or updating array element===============`);
let element0thIndex = array[0];
console.log(element0thIndex);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last element in array is:  ${array[array.length-2]}`);
console.log(`========= Updating an element===========`);
array[1] = 70;
console.log(array);

console.log(`========= indexOf()===========`);
console.log(array.indexOf(30));

console.log(`========= Traversing an array===========`);
let arrayNum = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element); 
} 
console.log(`========= Traversing an array in reverse order===========`);
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

let arrayNums = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
arrayNums.push(88);
console.log(array);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(arrayNumbers);

console.log(`====== Adding element in first position  =========`);
arrayNumbers.unshift(99);
console.log(arrayNumbers);

let arrayN = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in first position =========`);
arrayNumbers.pop();
console.log(arrayNumbers);

var arrayNumber =[22,11,44,55,77,33];
console.log(`===============slice =============`);
const arraySlice = arrayNumber.slice(3);
console.log( arraySlice);

const arrayElements = arrayNumber .slice (1,3);
console.log(arrayElements);



console.log(`=====================splice=====================`);

var arrayNumber = [22,11,44,55,77,33];
const splicedElements= arrayNumber.splice (4);
console.log(arrayNumber);
console.log(splicedElements);


console.log(`===============splice to remove=================`);
var arrayNumber = [22,11,44,55,77,33];
var removedElements= arrayNumber.splice(2,  2);
console.log(arrayNumber);
console.log(removedElements);

console.log(`=====================splice() insert element=====================`);
var arrayNumber = [22,11,44,55,77,33];
arrayNumber.splice (2,0,99);
console.log(arrayNumber);

console.log(`=====================splice=====================`);
var arrayNumber = [22,11,44,55,77,33];
arrayNumber.splice (2,0,99);
console.log(arrayNumber);


console.log(`insert element 100,200,400,0,3,at time replace any element`);
var arrayNumber = [22,11,44,55,77,33];
arrayNumber.splice (3,0,100,200,400,);
console.log(arrayNumber);
console.log(`insert an element 500 at index 2 by replacing an element `);
var arrayNumber = [22,11,44,55,77,33];
arrayNumber.splice (2,1,500);
console.log(arrayNumber);


console.log(`Insert an element 700 at index 3 by replacing 2 element `);
arrayNumber.splice(3,2,700);
console.log(arrayNumber);


console.log(`================for in loop =========================`);
for (const key in arrayNumber ){
    const element=arrayNumber[key];
    console.log(key ,element);

}
for (const index in arrayNumber )
{
    const element=arrayNumber[index];
    console.log(`index :${index},value :${element}`);
}

















