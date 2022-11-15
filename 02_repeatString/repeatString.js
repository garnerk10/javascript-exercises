const repeatString = (string, num) => {
    let newString = "";
    for(let i = 0; i < num; i++){
        newString += string
    };

    return newString;
};

console.log(repeatString('hey', 10))
// Do not edit below this line
module.exports = repeatString;
