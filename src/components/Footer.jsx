import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsCardHeading } from 'react-icons/bs';
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
                        <a href="https://github.com/AlectorAlexander" target="_blank" className="text-light me-3" rel="noreferrer">
                            <AiFillGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/alector-alexander" target="_blank" className="text-light me-3" rel="noreferrer">
                            <AiFillLinkedin size={24} />
                        </a>
                        <a href="mailto:alector.alexandre@gmail.com" target="_blank" className="text-light me-3" rel="noreferrer">
                            <SiGmail size={24} />
                        </a>
                        <a href="https://wa.me/55319735522095" target="_blank" className="text-light me-3" rel="noreferrer">
                            <AiOutlineWhatsApp size={24} />
                        </a>
                        <a href="https://docs.google.com/document/d/1uSajQTmqiTXiQ7SKIEAu1Q6FfAEi0xYE9z_oC7OiWus/edit?usp=sharing" target="_blank" className="text-light me-3" rel="noreferrer">
                            <BsCardHeading size={24} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
