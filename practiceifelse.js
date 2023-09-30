console.log("===========if else ====================");
var voteEligible = function (age)
    { 
    
        var result = +age;
        if (age == 0 || age < 0 || age > 130 || age == null || isNaN(result)) {
          console.log(`Invalid Values :${age}`); } else {
        if (age < 18) {
            console.log(`invalid result : ${age}` );
        }
        else {
            console.log(`Congratulations! You are now eligible to vote. Age: ${age}`);
          }


    }
     } ;
     voteEligible(32);
     voteEligible(10);
     voteEligible(6);
     voteEligible(22);
     voteEligible();
     console.log("+++++++++++++++++Invalid Values+++++++++++++++++++++++++++++++");
     voteEligible("Vish");
     voteEligible("Amdocs");
     voteEligible(-10);
     voteEligible(200);
     voteEligible(0);
     voteEligible(undefined);