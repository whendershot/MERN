const express = require('express');
const  {faker} = require('@faker-js/faker');

const app = express();

const port = 8080;


const createUser = () => {
    const newUser = {
        _id: faker.database.mongodbObjectId(),
        password: faker.random.alphaNumeric(8),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.companyName(),
        address: faker.address.buildingNumber(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    };
    return newCompany;
};

app.get("/api", (req, res) => {
    res.json({message: "Hello World! I am coming for you."});
});

app.get("/api/users/new", (req, res) => {
    res.json({user: createUser()});
});

app.get("/api/companies/new", (req, res) => {
    res.json({company: createCompany()});
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany(),
    });
});

app.listen( port, () => console.log('Listening on port: ${port}') );
