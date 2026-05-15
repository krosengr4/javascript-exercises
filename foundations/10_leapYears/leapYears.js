// LEAP YEARS
// Divisible by 4
// NOT divisible by 100 UNLESS divisible by 400
// Years ending in 00 MUST BE divisible by 400 to be leap years
const leapYears = function (year) {
    const divisibleByFour = year % 4 == 0;
    const isCentury = year % 100 == 0;
    const divisibleByFourHundred = year % 400 == 0;

    if (divisibleByFour && (!isCentury || divisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
