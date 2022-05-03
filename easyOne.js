// Easy One ================================================== //
function oddAndEven(numberArray) {
    const evenNum = numberArray.filter(outputArray => {
        return outputArray % 2 === 0
    });

    const oddNum = numberArray.filter(outputArray => {
        return outputArray % 2 !== 0
    });

    console.log(`Even Number Array:`, evenNum);
    console.log(`Odd Number Array:`, oddNum);
};

oddAndEven([1, 2, 3, 4, 5, 6]);







// Easy Two ================================================== //

function checkingPrime(numberArray) {
    const primeNum = numberArray.filter(outputArray => {

        if (outputArray <= 1) {
            return false;
          } else {
            for (let i = 2; i < outputArray; i++) {
              if (outputArray % i == 0) {
                return false;
              }
            }
            return true;
          }
    });

    console.log(`Prime Number Array:`, primeNum);
};

checkingPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
