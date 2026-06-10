const fibonacci = function (countArg) {
    let count;
    if (typeof countArg !== "number") {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    if (count < 0) {
        return "OOPS";
    }
    if (count == 0) {
        return 0;
    }

    let firstPrev = 1;
    let secPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secPrev;
        secPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
