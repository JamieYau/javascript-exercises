const findTheOldest = function(arr) {
    const oldest = arr.sort(function(a,b){ 
        const currentPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return currentPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
