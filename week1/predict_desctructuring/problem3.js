const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
//Will print '12345' and then print 'null' since person does not have a 'password' attribute.
//Actual printout is 'undefined'
console.log(password);
console.log(hashedPassword);

