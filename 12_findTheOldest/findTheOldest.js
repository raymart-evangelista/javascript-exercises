const findTheOldest = function(people) {

    let currYear = (new Date()).getFullYear();



    // determine age
    let person = people.forEach(function (person) {

        // if someone doesn't have a yearOfDeath, use currYear to find age
        if(person['yearOfDeath'] === undefined) {
            person['age'] = currYear - person['yearOfBirth'];
        } else {
            person['age'] = person['yearOfDeath'] - person['yearOfBirth'];
        }
        console.table(people);

    })

    
    // sort from oldest to youngest
    let ordered = people.sort(function(person1, person2) {
        if (person1.age > person2.age) {
            return -1;
        } else {
            return 1;
        }
    })
    console.table(ordered);

    return ordered[0];

};

// Do not edit below this line
module.exports = findTheOldest;
