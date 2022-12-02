const caesar = function(str, shift) {
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        let initialCode = str.charCodeAt(i);

        if(initialCode >= 97 && initialCode <= 122){
            let newCode = initialCode + shift;
            if(newCode > 122){
                newCode - 26;
                newStr += String.fromCharCode(newCode);
            } else if(newCode < 97){
                newCode + 26;
                newStr += String.fromCharCode(newCode);
            } else {newStr += String.fromCharCode(newCode);};
        } 
        
        else if(initialCode >= 65 && initialCode <= 90){
            let newCode = initialCode + shift;
            if(newCode > 90){
                newCode - 26;
                newStr += String.fromCharCode(newCode);
            } else if(newCode < 65){
                newCode + 26;
                newStr += String.fromCharCode(newCode);
            } else {newStr += String.fromCharCode(newCode);};
        }
        
        else {
            newStr += String.fromCharCode(initialCode);
        };
    };

    return newStr;
};

// Do not edit below this line
module.exports = caesar;
