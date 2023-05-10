import React from 'react';
import PropTypes from 'prop-types';
import myBackground from '../images/DALL·E-background.png';
import '../styles/Projects.css';
import { NavLink } from 'react-bootstrap';

const ProjectsBanner = React.forwardRef(({ setTypeOfProjects , forwardedRef, componentRef, visible}) => {   

    const animationControl = componentRef === 'ProjectBanner' && visible;
    const classN = animationControl ? 'animate__animated animate__fadeIn' : '';


    return (
        <div
            ref={forwardedRef} data-type='ProjectBanner'
            className="project"
            placeholder='blur'
            style={{
                backgroundImage: `url(${myBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: '0% 40%',
            }}>
            <h2 className={`project-title ${classN}`}>Projetos</h2>
            <div  className='navbr'>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className={`${classN} nav-link`}>FrontEnd</NavLink>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className={`${classN} nav-link`}>BackEnd</NavLink>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className={`${classN} nav-link`}>Todos</NavLink>
            </div>
        </div>
    );
});

ProjectsBanner.propTypes = {
    setTypeOfProjects: PropTypes.func.isRequired,
    componentRef: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};

ProjectsBanner.displayName = 'ProjectsBanner';

export default ProjectsBanner;
