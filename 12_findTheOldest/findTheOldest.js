const findTheOldest = function(people) {
	return people
	.map(person => {
		person['age'] = (person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
		return person;
	})
	.sort((person1, person2) => person1.age - person2.age)
	.pop();
	// return people
	// .reduce((oldestPerson, currentPerson) => {
	// 	oldPersonAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
	// 	currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
	// 	return (oldPersonAge > currentPersonAge) ? oldestPerson : currentPerson;
	// });
};

const getAge = function (death, birth) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
