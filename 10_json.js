


const postInString = `{
    "usier id ": 1,
    "id": "on trip",
    "body ":"feeling awsome ..after long break "
}`
console.log(typeof postIntring);
const post = JSON.parse (postInString);
console.log(typeof post);
console.log(post);

const person ={
    name : "janny ",
    age :34,
    city :"pune "
}
const personJson=JSON.stringify(person);
console.log(typeof personJson);
console.log(personJson);


const personElon={
    name : "elon ",
    age :54,
    totalCompany :9,
    Companies:{
        tesla:"30000usd",
        twitter:"150B usd",
        spacex:"200B usd"

    },
    kidName : ['deny','weny','randy','mony','sony']
}
const elonJson =JSON.stringify(personElon);
console.log(elonJson);