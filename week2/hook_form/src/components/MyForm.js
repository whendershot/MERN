import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const MyForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        console.log("Hello: ", newUser);
    };

    return (
        <>
        <Container>
            <Form onSubmit={ createUser }>
                <Form.Group className="mb-3"controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" onChange={ (e) => {return setFirstName(e.target.value)} } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" onChange={ (e) => {return setLastName(e.target.value)} } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={ (e) => {return setEmail(e.target.value)} } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={ (e) => {return setPassword(e.target.value)} } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onChange={ (e) => {return setConfirm(e.target.value)} } />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
        
        <Container>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm}</p>
</Container>
        
        </>
    );
};

export default MyForm;