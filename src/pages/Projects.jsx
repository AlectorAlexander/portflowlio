import { useState } from 'react';
import React, { useEffect } from 'react';
import '../styles/Projects.css';
import { styles } from '../services/backgroundAnimations';
import PropTypes from 'prop-types';
import { backendProjects, frontEndProjects } from '../services/projects';
import CardComponent from '../components/Card';
import Slider from 'react-slick';


const Projects = React.forwardRef(({typeOfProjects, forwardedRef}) => {
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
        } else if (typeOfProjects === 'FrontEnd') {
            setRendrerProjects(frontEndProjects);
        } else {
            setRendrerProjects(backendProjects);
        }
    }, [typeOfProjects]); 
  
    return (
        <div ref={forwardedRef} data-type='projects' className="projects d-flex justify-content-center align-items-center" style={styles[`${typeOfProjects}`]}>
            <div>
                <Slider className='carousel' {...settings}>
                    {renderProjects &&  renderProjects.map((project, i) => (
                        <CardComponent key={i} renderProjects={project} /> 
                    ))}
                </Slider>
            </div>
        </div>
    );
    
});
  
Projects.propTypes = {
    typeOfProjects: PropTypes.string.isRequired,
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};

Projects.displayName = 'Projects';


export default Projects;
