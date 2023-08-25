const removeFromArray = function(...args) {//([1, 2, 3, 4],3, 2)
    let array = args[0];//[1,2,3,4]
    let array2 = [];//3,2
    for (let i = 1;i<args.length;i++){
        array2.push(args[i]);
    }
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j] === array[i]) {
                array.splice(i, 1);
                break; 
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
