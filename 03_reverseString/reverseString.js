const reverseString = function(x) {
    let res = "";

    if(x === "") return res;
    for(let i = x.length - 1; i >= 0; i--) { res += x.charAt(i); }

    return res;
};

// Do not edit below this line
module.exports = reverseString;
