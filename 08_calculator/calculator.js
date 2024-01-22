const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function(arr) {
	return arr.reduce((multi, value) => multi * value);
};

const power = function(a, b) {
	return a ** b;
  // return Math.pow(a, b);
};

const factorial = function(num) {
  let fact = 1;
  if (num <= 1) {
    return fact;
  }
  for (let index = 2; index <= num; index++) {
    fact *= index;
  }
  return fact;
  // if (num === 0) {
  //   return 1;
  // }

  // return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
