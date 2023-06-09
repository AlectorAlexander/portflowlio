import { useState } from 'react';
import React, { useEffect } from 'react';
import '../styles/Projects.css';
import { styles } from '../services/backgroundAnimations';
import PropTypes from 'prop-types';
import { backendProjects, frontEndProjects } from '../services/projects';
import CardComponent from '../components/Card';
import Slider from 'react-slick';


const Projects = React.forwardRef(({typeOfProjects, forwardedRef, componentRef, visible}) => {
    const [renderProjects, setRendrerProjects] = useState(null);

    const animationControl = componentRef === 'Projects' && visible;
    const classN = animationControl ? 'animate__animated animate__backInDown' : 'animate__animated animate__bounceOut';



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    const setAllProjects = () => {
        setRendrerProjects([...frontEndProjects, ...backendProjects]);
    };

    useEffect(() => {
        if (typeOfProjects === 'Todos') {
            setAllProjects();
        } else if (typeOfProjects === 'FrontEnd') {
            setRendrerProjects(frontEndProjects);
        } else {
            setRendrerProjects(backendProjects);
        }
    }, [typeOfProjects]); 
  
    return (
        <div  className="projects" style={styles[`${typeOfProjects}`]}>
            <div ref={forwardedRef} data-type='Projects' className="Projects-container">
                <Slider className={`carousel ${classN}`} {...settings}>
                    {renderProjects &&  renderProjects.map((project, i) => (
                        <CardComponent renderProjects={project} key={i} /> 
                    ))}
                </Slider>
            </div>
        </div>
    );
    
});
  
Projects.propTypes = {
    componentRef: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    typeOfProjects: PropTypes.string.isRequired,
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};

Projects.displayName = 'Projects';


export default Projects;
