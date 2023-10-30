

let fistName = `Achyut`;
let lastName=`choudhari`;

let myName = fistName;
console.log(myName);
fistName=`Ac`;
console.log(myName);
myName=`Ganesh`;

let person ={
    Name :`Elon`,
    city : `pune`,
    isMarried:true

}
let elonperson = {
    country = `usa`
}
let elonPerson= person
elonPerson.city =`mumbai`;
console.log(elonPerson);
console.log(person.city);
let student ={
    Name:`Nagesh`,
    age:22,
    graduation :`Be-compuuter science`
}
let stdGanesh={
    ...stdNagesh
};
stdGanesh.ganesh=`ganesh`;
console.log(stdNagesh.name);