const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
//Will print 'false' (numbers[1] == numbers[3]) and 'true' (numbers[1] == numbers[8])
console.log(first == second);
console.log(first == third);

