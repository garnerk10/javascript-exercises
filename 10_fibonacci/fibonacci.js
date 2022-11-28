const fibonacci = function(num) {
    let fibSequence = [1, 1, 2];
    let getNum = Number(num);

    if(getNum > 0){
    for(let i = 2; i <= getNum; i++){
        newAdd = (fibSequence[i-1] + fibSequence[i]);
        fibSequence.push(newAdd);
    };} else {
        return 'OOPS'
    };

    return fibSequence[getNum - 1];

};
fibonacci(3);
// Do not edit below this line
module.exports = fibonacci;
