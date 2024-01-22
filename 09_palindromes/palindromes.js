const palindromes = function (str) {

	let processedString = str
		.toLowerCase()
		.split("")
		.filter(value => Number.isInteger(parseInt(value)) || value.toLowerCase() !== value.toUpperCase())
		.join("");
		// .replace(/[^a-z0-9]/g, "");

	return processedString === processedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
