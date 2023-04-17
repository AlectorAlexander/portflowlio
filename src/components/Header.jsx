import React from 'react';
import 'react';
import '../styles/Header.css';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar className='header' bg="light" expand="lg">
            <Navbar.Brand href="#home">Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link href="#link">Sobre Mim</Nav.Link>
                    <Nav.Link href="#link">Projetos</Nav.Link>
                    <Nav.Link href="#link">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;