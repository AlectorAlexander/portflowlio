import { useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import myBackground from '../images/DALL·E-background.png';
import '../styles/Projects.css';
import { NavLink } from 'react-bootstrap';

const ProjectsBanner = React.forwardRef(({ setTypeOfProjects , forwardedRef, componentRef, visible}) => {   
    const [animation, setAnimation] = React.useState(false);

    const animationControl = componentRef === 'ProjectBanner' && visible;
    useEffect(() => {
        if(animationControl){
            setAnimation(true);
        }
    }, [animationControl]);
    /* 
    useEffect(() => {
        console.log(componentRef, visible);
    }, [componentRef, visible]); */

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
            <h2 style={{opacity: animation ? 1 : 0}} className="project-title">Projetos</h2>
            <div style={{opacity: animation ? 1 : 0}} className='navbr'>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className="nav-link">FrontEnd</NavLink>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className="nav-link">BackEnd</NavLink>
                <NavLink onClick={({target}) => setTypeOfProjects(target.innerText)} className="nav-link">Todos</NavLink>
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
