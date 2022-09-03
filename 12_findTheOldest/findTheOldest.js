const findTheOldest = function (arr) {
  const oldest = arr.sort(function (a, b) {
    let currentPerson, nextPerson;
    if (typeof a.yearOfDeath === "undefined")
      currentPerson = new Date().getFullYear() - a.yearOfBirth;
    else {
      currentPerson = a.yearOfDeath - a.yearOfBirth;
    }
    if (typeof b.yearOfDeath === "undefined")
      nextPerson = new Date().getFullYear() - b.yearOfBirth;
    else {
    nextPerson = b.yearOfDeath - b.yearOfBirth;
    }
    console.log (a.yearOfDeath, b.yearOfDeath)
    return currentPerson > nextPerson ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
