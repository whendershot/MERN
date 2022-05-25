import React from'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigatorBar = (props) => {
    
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="">Favorite Authors</Navbar.Brand>
                <Navbar.Toggle aria-controls="my_simple_navbar"></Navbar.Toggle>
                <Navbar.Collapse id="my_simple_navbar">
                    <Nav variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link eventKey="list_authors" href="/authors">Authors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="add_author" href="/authors/new">Add Author</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigatorBar;