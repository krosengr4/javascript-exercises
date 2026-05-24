const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (nums) {
    return nums.reduce((total, currentVal) => total + currentVal, 0);
};

const multiply = function (nums) {
    return nums.reduce((total, current) => total * current);
};

const power = function (base, exp) {
    return Math.pow(base, exp);
};

const factorial = function (num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    // Recursive step: call this function again but with 1 less than current number
    return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
