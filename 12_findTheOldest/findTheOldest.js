const findTheOldest = function(people) {
    return people.reduce((p1, p2) => {
        const p1Age = p1.yearOfDeath ? p1.yearOfDeath - p1.yearOfBirth : new Date().getFullYear() - p1.yearOfBirth;
        const p2Age = p2.yearOfDeath ? p2.yearOfDeath - p2.yearOfBirth : new Date().getFullYear() - p2.yearOfBirth;
        return p1Age > p2Age ? p1 : p2; 
    })
};

// Do not edit below this line
module.exports = findTheOldest;
