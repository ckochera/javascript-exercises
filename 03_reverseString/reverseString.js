const reverseString = function() {
    let str = "";
    const split = str.split("");
    const reverse = split.reverse();
    const joinStr = reverse.join("");
    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;