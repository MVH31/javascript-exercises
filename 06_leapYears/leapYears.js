const leapYears = function(yyyy) {
    if((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) return true;

    return false;
};

// Do not edit below this line
module.exports = leapYears;
