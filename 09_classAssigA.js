console.log(`===========================step 1==============`);
class vehicleDetails {
  Name;
  color;
  Number;
  tyreType;
  work;

  constructor(Name, color, Number, tyreType, work) {
    this.Name =Name;
    this.color = color;
    this.Number = Number;
    this.tyreType = tyreType;
    this.work = work;
  }
}
const vehicleDetailsHonda = new vehicleDetails(
 ` honda`,
 ` black`,
 ` 3329`,
  `tubeless`,
 ` normal`
);
console.log(vehicleDetailsHonda);
console.log(
  `honda details : ${vehicleDetailsHonda.Name} , ${vehicleDetailsHonda.color} ,${vehicleDetailsHonda.color},${vehicleDetailsHonda.Number},${vehicleDetailsHonda.tyreType},${vehicleDetailsHonda.work}`
);
const vehicleDetailsskoda = new vehicleDetails(
    ` skoda`,
    ` white`,
    ` 3222`,
     `tubeless`,
    ` street`
   );
   console.log(vehicleDetailsskoda);
   const vehicleDetailsShine = new vehicleDetails(
    ` shine`,
    ` gray`,
    ` 3636`,
     `with tube`,
    ` ok`
   );
   console.log(vehicleDetailsShine);
   const vehicleDetailsI10 = new vehicleDetails(
    ` I10`,
    ` white`,
    ` 6969`,
     `tubeless`,
    ` fast`
   );
   console.log(vehicleDetailsI10);
console.log(`======================array============`);

const arrayVehicleDetail = [vehicleDetailsskoda,vehicleDetailsskoda , vehicleDetailsI10, vehicleDetailsShine];
 for (const element of arrayVehicleDetail) {
    console.log(element)


    console.log(`====step2==========`);
    
 }













   