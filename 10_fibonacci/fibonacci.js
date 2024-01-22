const fibonacci = function(num) {
	num = parseInt(num);
	if (num < 0) return "OOPS";
	if (num == 0) return 0;

	// let fibArr = [1, 1];
	// for (let i = 2; i < num; i++) {
	// 	fibArr.push(fibArr[i-1] + fibArr[i-2]);
	// 	fibArr[i] = fibArr[i-1] + fibArr[i-2];
	// }
	// return fibArr.pop();

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

	let firstPrevious = 1;
	let secondPrevious = 0;

	for (let i = 2; i <= num; i++) {
		[secondPrevious, firstPrevious] = [firstPrevious, firstPrevious + secondPrevious];
	}
	return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
