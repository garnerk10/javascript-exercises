const findTheOldest = function(arr) {
    let date = new Date();
    let updatedYear = [];

    arr.forEach(person => {
        if('yearOfDeath' in person === false){
            person.yearOfDeath = date.getFullYear();
            updatedYear.push(person);
        } else {
            updatedYear.push(person);
        }
    });

    const ordered = updatedYear.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1)

    return ordered[0];
};
// Do not edit below this line
module.exports = findTheOldest;
