const sumAll = function(num1, num2) {
    let total = 0;
    
    if(num1 < num2){
        for(let i = num1; i <= num2; i++){
            total += i
    };} 
    else {
        for(let i = num2; i <= num1; i++){
            total += i
        }
    }
    

    try{
        if(num1 < 0 || num2 < 0) throw 'ERROR';
        if(typeof num1 !== 'number' || typeof num2 !== 'number') throw 'ERROR';
    }

    catch(err){
        return err
    }
    
    return total;
};

console.log(sumAll(1, 12885))
// Do not edit below this line
module.exports = sumAll;
