function stuff(numberArray) {
    const evenNum = numberArray.filter(outputArray => {
        return outputArray % 2 === 0
    });

    const oddNum = numberArray.filter(outputArray => {
        return outputArray % 2 !== 0
    });

    console.log(`Even Number Arrays:`,evenNum);
    console.log(`Odd Number Arrays:`, oddNum);
};

stuff([1, 2, 3, 4, 5, 6]);