import React from'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigatorBar = (props) => {
    
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="">React NavBar 0.1</Navbar.Brand>
                <Navbar.Toggle aria-controls="my_simple_navbar"></Navbar.Toggle>
                <Navbar.Collapse id="my_simple_navbar">
                    <Nav variant="pills" defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigatorBar;