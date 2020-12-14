import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function LoginHeader(props){
    const [company] = useState(props.company);
    return(
        <>
            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed="top">
                    <Navbar.Brand href="#">{company}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-collapse"/>
                    <Navbar.Collapse id="navbar-collapse">
                        <Nav className="mr-auto" style={{fontSize:'1.4rem'}}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/mock/transfer">Transfer</Nav.Link>
                        </Nav>
                        <Nav style={{fontSize:'1.4rem'}}>
                            <Nav.Link href="/">Log Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}