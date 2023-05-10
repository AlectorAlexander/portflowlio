import React, { useEffect } from 'react';
import 'react';
import '../styles/Header.scss';
import { Nav, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Header({Ref, setComponent}) {
    useEffect(() => {
        console.log(Ref);
    }, [Ref]);


    return (
        <Navbar className={`header mt-0 animate__animated  animate__jackInTheBox ${Ref}`} expand="lg">
            <Navbar.Brand className='mx-2' href="#home">Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end mx-5">
                <Nav>
                    <Nav.Link className='navbar-light' onClick={() => setComponent('home')} href="#home"><span>Sobre</span> <span>Mim</span></Nav.Link>
                    <Nav.Link onClick={() => setComponent('ProjectBanner')} href="#projects"><span>Projetos</span></Nav.Link>
                    <Nav.Link onClick={() => setComponent('Contatos')} href="#contato"><span>Contato</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

Header.propTypes = {
    Ref: PropTypes.string.isRequired,
    setComponent: PropTypes.func.isRequired,
};


export default Header;