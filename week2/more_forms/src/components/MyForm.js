import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import DisplayForm from './DisplayForm';

const MyForm = (props) => {

    const EMAIL_FORMAT = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [validated, setValidated] = useState(false);

    

    const handleSubmit = (e) => {
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

    setValidated(true);
    };


    return (
        <>
            <Container>
                <Form noValidate validated={validated} onSubmit={ handleSubmit }>
                    <Form.Group className="mb-3"controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange={ (e) => { setFirstName(e.target.value);} } />
                        { !firstName && <p>Please enter a First Name</p> }
                        { firstName && firstName.length < 2 && <p>First Name must be at least 2 characters</p> }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={ (e) => { setLastName(e.target.value)} } />
                        { !lastName && <p>Please enter a Last Name</p> }
                        { lastName && lastName.length < 2 && <p>Last name must be at least 2 characters</p> }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={ (e) => { setEmail(e.target.value)} } />
                        { !email && <p>Please enter an Email</p> }
                        { email && email.length < 2 && <p>Email must be at least 2 characters</p> }
                        { email && !email.match(EMAIL_FORMAT) && <p>please enter a valid email address</p> }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={ (e) => { setPassword(e.target.value)} } />
                        { !password && <p>Please enter a password</p> }
                        { password && password.length < 8 && <p>Password must be at least 8 characters</p> }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" onChange={ (e) => { setConfirm(e.target.value)} } />
                        { !confirm && <p>Please confirm your password</p>}
                        { password !== confirm && <p>The passwords must match</p> }
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
            
            <DisplayForm 
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
                confirm={confirm}
            />
        </>
    );
};

export default MyForm;