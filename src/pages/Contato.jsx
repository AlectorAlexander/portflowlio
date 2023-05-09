import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Contato.scss';



const Contato = React.forwardRef(({forwardedRef}) => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    };

    return (
        <div className='container' ref={forwardedRef} data-type="Contatos">
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='text-center animate__animated animate__swing'>Contata-me</h1>
                <div
                    className='d-flex w-100'
                >
                    <TextField
                        className='my-1 mx-1 w-100'
                        required
                        color="success"
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <TextField
                        className='my-1 mx-1 w-100'
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
                    className='my-1 w-100'  
                    required
                    color="success"
                    id="assunto"
                    label="Assunto"
                    variant="outlined"
                    value={assunto}
                    onChange={(event) => setAssunto(event.target.value)}
                />
                
                <TextField
                    className='my-1 w-100'
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
                    variant="outlined"
                    color="success"
                    type="submit"
                    className='my-1 button'
                >
        Enviar
                </Button>
            </form>
        </div>
    );


});
Contato.propTypes = {
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};
Contato.displayName = 'Contato';

export default Contato;
