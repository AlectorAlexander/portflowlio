import React, { useEffect } from 'react';
import 'react';
import '../styles/Header.scss';
import { Nav, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Header({Ref}) {

    useEffect(() => {
        console.log(Ref);
    }, [Ref]);

    return (
        <Navbar className={`header mt-0 animate__animated  animate__jackInTheBox ${Ref}`} expand="lg">
            <Navbar.Brand className='mx-2' href="#home">Dev</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end mx-5">
                <Nav>
                    <Nav.Link href="#link"><span>Sobre</span> <span>Mim</span></Nav.Link>
                    <Nav.Link href="#link"><span>Projetos</span></Nav.Link>
                    <Nav.Link href="#link"><span>Contato</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

Header.propTypes = {
    Ref: PropTypes.string.isRequired,
};


export default Header;