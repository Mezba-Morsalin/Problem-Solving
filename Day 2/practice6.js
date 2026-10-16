const simpleArrSum = (numbers) => {
    let sum = 0;

    for (const num of numbers) {
        sum = sum + num;
    }

    return sum;
};

console.log(simpleArrSum([1, 2, 3, 4]));