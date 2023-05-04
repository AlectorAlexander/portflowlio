import React from 'react';
import 'react';
import '../styles/Header.css';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar className='header mt-0' expand="lg">
            <Navbar.Brand className='mx-2' href="#home">Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end mx-5">
                <Nav>
                    <Nav.Link href="#link">Sobre Mim</Nav.Link>
                    <Nav.Link href="#link">Projetos</Nav.Link>
                    <Nav.Link href="#link">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;