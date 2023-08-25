const reverseString = function(string) {
    const array = string.split("");
    let reverse = array.reverse();
    let join = reverse.join("");
    return join;
};

// Do not edit below this line
module.exports = reverseString;
