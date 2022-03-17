const repeatString = function(someString, someNum) {

    if (someNum < 0) {
        return 'ERROR'
    }

    let newString = '';

    for (let i = 0; i < someNum; i++) {
        newString += someString;
    }

    return newString;

};

// Do not edit below this line
module.exports = repeatString;
