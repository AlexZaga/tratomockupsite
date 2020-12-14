import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function LoginHeader(props){
    const [company] = useState(props.company);
    return(
        <>
            <Container>
                <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
                    <Navbar.Brand href="/">{company}</Navbar.Brand>
                </Navbar>
            </Container>
        </>
    )
}