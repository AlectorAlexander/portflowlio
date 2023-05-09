import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import '../styles/Footer.css';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="text-light footer">
            <Container className='w-100 d-flex flex-row align-items-center'>
                <Row className='row-footer'>
                    <Col xs={12} md={6}>
                        <p className='text-center w-100'>
              &copy; 2023, Todos os direitos reservados.
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <a href="https://github.com/usuario" className="text-light me-3">
                            <AiFillGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/usuario" className="text-light me-3">
                            <AiFillLinkedin size={24} />
                        </a>
                        <a href="mailto:usuario@dominio.com" className="text-light me-3">
                            <SiGmail size={24} />
                        </a>
                        <a href="https://wa.me/numero" className="text-light me-3">
                            <AiOutlineWhatsApp size={24} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
