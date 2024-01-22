const removeFromArray = function(inputArr, ...argumentArr) {
	return inputArr.filter(element => !argumentArr.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
