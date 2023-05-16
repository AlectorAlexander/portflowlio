import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Iframe from 'react-iframe';
import '../styles/Card.css';

function CardComponent({ renderProjects }) {
    const { gif, linkRepositorie, linkProject, name, description, stacks } =
    renderProjects;

    const rightRender =
    gif !== '' ? (
        <Card.Img className='gif' variant='top' alt={name} src={gif} />
    ) : (
        <Iframe
            className='iframe'
            url={linkRepositorie}
            loading='lazy'
            display='block'
            width='100%'
            height='200px'
            position='relative'
        />
    );

    return (
        <Card
            className='cardResponsive'
        >
            <Card.Body className='cloro text-white d-flex h-50 justify-content-between align-items-center flex-column'>
                <Card.Title className='animate__backInDown'>{name}</Card.Title>
                {rightRender}
                <Card.Text className='text-center'>{description}</Card.Text>
                <div className='mt-1 link-container d-flex justify-content-center flex-wrap flex-row'>
                    <Card.Link href={linkRepositorie} target='_blank'>
          Link do repositório
                    </Card.Link>
                    {linkProject !== '' && (
                        <Card.Link href={linkProject} target='_blank'>
            Link da aplicação
                        </Card.Link>
                    )}
                </div>
                <ul className='list-group d-flex justify-content-center flex-wrap flex-row'>
                    {stacks.map((el) => (
                        <li key={el}>{el}</li>
                    ))}
                </ul>
            </Card.Body>
        </Card>
    );
}

CardComponent.propTypes = {
    renderProjects: PropTypes.shape({
        gif: PropTypes.string,
        linkRepositorie: PropTypes.string.isRequired,
        linkProject: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stacks: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default CardComponent;
