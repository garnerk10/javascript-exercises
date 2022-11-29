const getTheTitles = function(arr) {
    let titleArr = [];

    arr.forEach(book => {
        titleArr.push(book.title)
    });

    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
