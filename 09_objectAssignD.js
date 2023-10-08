

////object proffeser 

let professor ={
    name : "Achyut choudhari ",
    age: 28,
    collageName : `matoshree collage og engg `,
    designation : "head of dipartment ",
    subject :  `jawa`,
    show : function(){
        console.log(`Hi Hello, How are you ?`);
    },
    certificates:["Hacker Rank Participation","Certificate in IFC Course","Certificate in Advance Programming"]

};
console.log(typeof professor);
console.log(professor);

console.log(`after addin total expernce ==========`);
professor.age = 30;
console.log(professor);

console.log(`after notified collage name =====>>>>`);
professor.collageName=`samsung enng collage `;
console.log(professor);

////after notified
console.log(`======after notified subject ==========`);
professor.subject=`math`;
console.log(professor);

console.log(`total object as follows `);

professor.certificates.push("Oracle Certified");
let lastElement=professor.certificates[professor.certificates.length-1];
console.log(`Last Element Of Array Certificates===>>  ${lastElement}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`Total Object As Follows ===>>>>`);
console.table(professor);
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`Traversing Total Array Certificates ===>> `);
for (const key of professor.certificates) {
    console.log(key);
    
}
console.log(`================================================================================================================ END =============================================================================================`);


















