import React from 'react';
import PropTypes from 'prop-types';
import myBackground from '../images/DALL·E-background.png';
import '../styles/Projects.css';
import { NavLink } from 'react-bootstrap';

const ProjectsBanner = React.forwardRef(({ setTypeOfProjects , forwardedRef}) => {
    return (
        <div
            ref={forwardedRef} data-type='ProjectBanner'
            className="project"
            placeholder='blur'
            style={{
                backgroundImage: `url(${myBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: '0% 40%'
            }}>
            <h2 className="project-title">Projetos</h2>
            <div className='navbr'>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className="nav-link">FrontEnd</NavLink>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className="nav-link">BackEnd</NavLink>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className="nav-link">Todos</NavLink>
            </div>
        </div>
    );
});

ProjectsBanner.propTypes = {
    setTypeOfProjects: PropTypes.func.isRequired,
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};

ProjectsBanner.displayName = 'ProjectsBanner';

export default ProjectsBanner;
