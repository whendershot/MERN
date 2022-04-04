const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//Will synaticaly fail since there is no name variable declared.
//'name' in the destructor was mapped to 'otherName'
console.log(name);
console.log(otherName);

