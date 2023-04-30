import { useState } from 'react';
import React, { useEffect } from 'react';
import '../styles/Projects.css';
import { styles } from '../services/backgroundAnimations';
import '../styles/Projects.css';
import PropTypes from 'prop-types';
import { backendProjects, frontEndProjects } from '../services/projects';
import CardComponent from '../components/Card';
import Slider from 'react-slick';


const Projects = ({typeOfProjects}) => {
    const [renderProjects, setRendrerProjects] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    }
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: width  > 834 ? 2 : 1,
        slidesToScroll: 1,
    };
    
    const setAllProjects = () => {
        setRendrerProjects([...frontEndProjects, ...backendProjects]);
    };

    useEffect(() => {
        if (typeOfProjects === 'Todos') {
            setAllProjects();
        }
    }, [typeOfProjects]); 
  
    return (
        <div className="projects" style={styles[`${typeOfProjects}`]}>
            <div>
                <Slider className='carousel' {...settings}>
                    {renderProjects &&  renderProjects.map((project) => (
                        <CardComponent key={project.id} renderProjects={project} /> 
                    ))}
                </Slider>
            </div>
        </div>
    );
    
};
  
Projects.propTypes = {
    typeOfProjects: PropTypes.string.isRequired
};

export default Projects;
