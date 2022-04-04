const cars = ['Tesla', 'Mercedes', 'Honda']
//No random accessor for destructing?
//Should grab the first car to store into 'randomCar' variable and then the second car to store into 'otherRandomCar'
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
//Will post 'Tesla' and then 'Mercedes'
console.log(randomCar)
console.log(otherRandomCar)