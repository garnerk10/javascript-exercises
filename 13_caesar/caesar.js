const caesar = function(str, shift) {
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        let initialCode = str.charCodeAt(i);

        //if character is lowercase
        if(initialCode >= 97 && initialCode <= 122){
            let newLowerCode = initialCode + (shift % 26);

            if(newLowerCode > 122){
                newLowerCode -= 26;
                newStr += String.fromCharCode(newLowerCode);
            } else if(newLowerCode < 97){
                newLowerCode += 26;
                newStr += String.fromCharCode(newLowerCode);
            } else {newStr += String.fromCharCode(newLowerCode);};
        } 
        
        //if character is uppercase
        else if(initialCode >= 65 && initialCode <= 90){
            let newUpperCode = initialCode + (shift % 26);

            if(newUpperCode > 90){
                newUpperCode -= 26;
                newStr += String.fromCharCode(newUpperCode);
            } else if(newUpperCode < 65){
                newUpperCode += 26;
                newStr += String.fromCharCode(newUpperCode);
            } else {newStr += String.fromCharCode(newUpperCode);};
        }
        
        //if character is not alphabetical
        else {
            newStr += String.fromCharCode(initialCode);
        };
    };

    return newStr;
};

caesar('Hello, World!', 75);
// Do not edit below this line
module.exports = caesar;
