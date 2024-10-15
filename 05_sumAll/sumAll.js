const sumAll = function(x, y) {
    let sum = 0;
    if(!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) return "ERROR";

    if(x > y) { t = x; x = y; y = t;}

    for(let i = x; i <= y; i++) sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;