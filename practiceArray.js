



const array =[11,3,6,10,43,29,50];
  let result=0;
  function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
     result=isPrimeNumber(element);
     console.log(`Given number ${element} Is Prime: ${result}`);
  }
  