const leapYears = function(year) {

    // years divisble by 100 aren't leap years unless they are divisible by 400
    // leap years are divisible by four
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false
        }
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }



};

// Do not edit below this line
module.exports = leapYears;
