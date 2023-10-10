


class person{
    fistName
    lastName
    city
    graduation



constructor (fistName,lastName,city,graduation) 
{
    this.fistName=fistName;
    this.lastName=lastName;
    this.city=city;
    this.graduation=graduation;


}
}
 const personELon = new person (`ELon`,`musk`,`austin`,`msc physics`);
 console.log(personELon);
 console.log(`ELon Details : ${personELon.fistName} , ${personELon.lastName} ,${personELon.city } , ${personELon.graduation}`);
 const personStew = new person (`stew `,`job`,`san franciscio`,`Droupout`);
 console.log(personStew);
 const personAchyut=new person (`achyut `,`job`,`ambajogai`,`be`);
 console.log(personAchyut);


 console.log(`=============================`);
const arrayPerson=[personELon,personAchyut,personStew];
for (
    const element of arrayPerson
){
    console.log(element);
}











