const removeFromArray = function(arr, ...args) {
    const res = [];

    arr.forEach((i) => {
        if(!args.includes(i)) res.push(i);
    });

    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
