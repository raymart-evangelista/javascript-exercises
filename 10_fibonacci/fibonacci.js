const fibonacci = function(fibNum) {

    if (fibNum < 0) {
        return 'OOPS';
    }

    fibNum = parseInt(fibNum);

    return fibMath(fibNum);

};

function fibMath(fibNum) {

    if (fibNum == 0) {
        return 0;
    } else if (fibNum == 1) {
        return 1;
    } else {
        return ( fibMath(fibNum-1) + fibMath(fibNum-2));
    }

}

// Do not edit below this line
module.exports = fibonacci;
