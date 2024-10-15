const repeatString = function(string, x) {
    if(x < 0) return 'ERROR';
    let str = "";
    for(let i = 1; i <= x; i++) str += string;

    return str;
};

// Do not edit below this line
module.exports = repeatString;
