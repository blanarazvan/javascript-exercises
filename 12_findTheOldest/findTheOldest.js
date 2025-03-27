const findTheOldest = function(people) {
//Find the oldest person 
// First find out their age by yearOfDeath - yearOfBirth
// Compare all the elements and get the greater one
// Return the name of that person 
    const oldestPerson = people.reduce((oldest, person) => {
        let age;
        if(person.yearOfDeath === undefined){
            const date = new Date().getFullYear();
            age = date - person.yearOfBirth;
        } else {age = person.yearOfDeath-person.yearOfBirth;}
        if(age > oldest.age){
            return {name: person.name, age: age};
        }
        return oldest;
    }, {name: '', age: 0});

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
