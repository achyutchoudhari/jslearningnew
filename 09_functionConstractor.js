


console.log(`============function constrictor=================`);
function Bank (bankName,city,pin){
    this.bankName = bankName;
    this.city = city;
    this.pin = pin;
    this.show = function (){
        console.log(`bank deatailas :${this.bankName},${this.city},${this.pin}`);
    }
}

const sbiBank = new Bank (`SBI`,`Pune `,121212);
console.log(sbiBank);
console.log(sbiBank.bankName, sbiBank.city , sbiBank.pin);

const axisBank = new Bank (`axis`,`mumbai`,431517);
console.log(axisBank );
const hdfcBank = new Bank (`HDFC`,`BEED`,431517);
console.log(hdfcBank );

Bank.prototype.country = `bharat`;
console.log(axisBank.country);
sbiBank.show();
axisBank.show();



