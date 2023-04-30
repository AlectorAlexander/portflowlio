import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Iframe from 'react-iframe';
import '../styles/Card.css';



function CardComponent({ renderProjects }) {
    const { gif, linkRepositorie, LinkProject, name, description } = renderProjects;
    
    
    const rightRender = gif !== '' ? 
        <Card.Img variant='top' 
            alt={name} src={gif} /> : 
        <Iframe
            className='iframe'
            url={linkRepositorie}
            loading='lazy'
            display='block'
            width='100%'
            height='200px'
            position='relative'
        />;

    return (
        <Card style={{ margin: '2rem', width: '75%', height: '65vh', backgroundColor: 'black' }}>
            <Card.Body className='bg-dark text-white'>
                <Card.Title>{name}</Card.Title>
                {rightRender}

                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={linkRepositorie} target='_blank'>
                    Link do repositório
                </Card.Link>
                {LinkProject !== '' && (
                    <Card.Link href={LinkProject} target='_blank'>
                        Link do site
                    </Card.Link>)}
            </Card.Body>
        </Card>
    );
}

CardComponent.propTypes = {
    renderProjects: PropTypes.shape({
        title: PropTypes.string,
        gif: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        linkRepositorie: PropTypes.string,
    }),
};

export default CardComponent;
