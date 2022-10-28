const findTheOldest = function(people) {
  return people.reduce((oldest, nextPerson) => {
    const now = new Date().getFullYear();
    const oldestAge = (oldest.yearOfDeath ?? now) - oldest.yearOfBirth;
    const nextPersonAge = (nextPerson.yearOfDeath ?? now) - nextPerson.yearOfBirth;
    return oldestAge > nextPersonAge ? oldest : nextPerson;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
