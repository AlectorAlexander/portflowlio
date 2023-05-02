import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles(() => ({
    root: {
        '& > *': {
            margin: '1rem',
        },
    },
    container: {
        minHeight: '100vh',
        width: '100%',
        marginTop: '1rem',
    },
    form: {
        '& > *': {
            margin: '1rem',
        },
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: '300px',
        maxWidth: '600px',
    },
    button: {
        marginTop: '1rem',
        marginBottom: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        maxWidth: '90px',
    },
}));

function Contato() {
    const classes = useStyles();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
    };

    return (
        <div className={classes.container}>
            <form className={classes.root && classes.form} onSubmit={handleSubmit}>
                <TextField
                    required
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                />
                <TextField
                    required
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    required
                    id="mensagem"
                    label="Mensagem"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={mensagem}
                    onChange={(event) => setMensagem(event.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                    endIcon
                >
        Enviar
                </Button>
            </form>
        </div>
    );
}

export default Contato;
