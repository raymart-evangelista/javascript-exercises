const removeFromArray = function() {

    // determine how many function arguments are passed in
    // by default, the first argument will be an array
    // there could be one or more arguments after the first argument so determine how many arguments there are
    const argAmount = arguments.length;
    let array = arguments[0];


    // outer for-loop will go through all the arguments passed in that weren't the array
    for (i = 1; i < arguments.length; i++) {

        // inner for-loop will go through the array and find the argument
        // if argument is found, remove it from the array
        for (j = 0; j < array.length; j++) {
            if (array[j] === arguments[i]) {
                array.splice(j,1);
            }
        }

    }



    // go through array and find argument, when argument is found, remove it from the array
    /*
    for (i = 0; i < array.length; i++) {
        if (array[i] === arg) {
            array.splice(i, 1);
        }
        
    }
    */


    //remove argument when found and return array without argument
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
