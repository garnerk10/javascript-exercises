const palindromes = function (str) {
    let lowerCaseStr = str.toLowerCase();
    let strToCheck = "";
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(lowerCaseStr.charCodeAt(i) >= 97 && lowerCaseStr.charCodeAt(i) <= 122){
            strToCheck += lowerCaseStr[i]}
    };

    for(let j = str.length - 1; j >= 0; j--){
        if(lowerCaseStr.charCodeAt(j) >= 97 && lowerCaseStr.charCodeAt(j) <= 122){
            newStr += lowerCaseStr[j]}
    };

    if(newStr === strToCheck){
        return true
    }
    else {return false};


};

// Do not edit below this line
module.exports = palindromes;
