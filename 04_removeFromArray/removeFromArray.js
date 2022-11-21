const removeFromArray = function(arr, ...deletes) {
    for (const num of deletes){
        for (let i = 0; i < arr.length; i++){
            if(arr[i] === num){
                arr.splice(i, 1);
                i--;
            }
        };
    }
    return arr
};

//let testArr = [1, 2, 3, 4, 5, 6];

//console.log(removeFromArray(testArr, 3, 5, 7));

// Do not edit below this line
module.exports = removeFromArray;
