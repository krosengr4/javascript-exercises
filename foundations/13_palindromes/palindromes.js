const palindromes = function (str) {
    const chars = str.split("");
    const sortedChars = [];

    for (const char of chars) {
        if (
            char != " " &&
            char != "," &&
            char != "." &&
            char != "?" &&
            char != "!"
        ) {
            sortedChars.push(char);
        }
    }

    const sortedString = sortedChars.join("");
    const reverseString = sortedChars.reverse().join("");

    if (sortedString.toLowerCase() === reverseString.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
