const sumAll = function(num1, num2) {

    let total = 0;
    // check for non numeric input
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    // check for negative numbers
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    // loop starting with the smaller number and continue up to and including the larger number
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (let i = num1; i <= num2; i++) {
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
