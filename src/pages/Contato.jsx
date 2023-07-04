import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import '../styles/Contato.scss';

const Contato = React.forwardRef(({forwardedRef, componentRef, visible}) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const animationControl = componentRef === 'Contatos' && visible;
    const classN = animationControl ? 'animate__animated animate__swing' : 'animate__animated animate__fadeOut';

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        const emailData = {
            to_name: 'Seu Nome',
            from_name: nome,
            message: mensagem,
            reply_to: email,
            subject: assunto
        };

        emailjs.send(serviceId, templateId, emailData, publicKey)
            .then((response) => {
                console.log('Email enviado com sucesso!', response.status, response.text);
            }, (error) => {
                console.error('Erro ao enviar email:', error);
            });

        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
    };
    const emailValidation = email.includes('@') && email.includes('.');
    const buttonValidation = nome !==  '' && emailValidation && assunto !== '' && mensagem !== '';

    return (
        <div className='container' ref={forwardedRef} data-type="Contatos">
            <form className='form' onSubmit={handleSubmit}>
                <h1 className={`text-center ${classN}`}>Contate-me</h1>
                <div
                    className='d-flex w-100'
                >
                    <TextField
                        className='mx-1 w-100'
                        required
                        color="success"
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <TextField
                        className='mx-1 w-100'
                        required
                        color="success"
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <TextField
                    className='w-100'  
                    required
                    color="success"
                    id="assunto"
                    label="Assunto"
                    variant="outlined"
                    value={assunto}
                    onChange={(event) => setAssunto(event.target.value)}
                />
                
                <TextField
                    className='w-100'
                    required
                    id="mensagem"
                    color="success"
                    label="Mensagem"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                />
                <Button
                    disabled={!buttonValidation}
                    variant="outlined"
                    color="success"
                    type="submit"
                    className='button'
                >
        Enviar
                </Button>
            </form>
        </div>
    );


});
Contato.propTypes = {
    componentRef: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};
Contato.displayName = 'Contato';

export default Contato;
