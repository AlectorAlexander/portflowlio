import React, { Suspense, useEffect,  useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
const Header = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./pages/Home'));
const ProjectsBanner = React.lazy(() => import('./pages/ProjectsBanner'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contato =  React.lazy(() => import('./pages/Contato'));
import './App.css';

function App() {
    const [typeOfProjects, setTypeOfProjects] = useState('Todos');
    const [Ref, setRef] = useState('');
    const [myElementIsVisible, updateMyElementIsVisible] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const projectBannerRef = useRef(null);
    const projectsRef = useRef(null);
    const contatoRef = useRef(null);



    useEffect(() => {
        console.log(Ref, myElementIsVisible);
    }, [Ref]);

    useEffect(() => {
        console.log('chamou');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setRef(entry.target.dataset.type);
                    updateMyElementIsVisible(entry.isIntersecting);
                }
            });
        }
        );
        if (projectBannerRef.current) {
            observer.observe(projectBannerRef.current);
        }
        
        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }
        
        if (contatoRef.current) {
            observer.observe(contatoRef.current);
        }
        
        return () => {
            if (projectBannerRef.current) {
                observer.unobserve(projectBannerRef.current);
            }
        
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        
            if (contatoRef.current) {
                observer.unobserve(contatoRef.current);
            }
        };
    }, [scrollPosition]);

    return (
        <div className="App">
            <CssBaseline />
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectsBanner forwardedRef={projectBannerRef} setTypeOfProjects={setTypeOfProjects} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Projects forwardedRef={projectsRef} typeOfProjects={typeOfProjects} />
            </Suspense>
            <section>
                <Suspense fallback={<div>Loading...</div>}>
                    <Contato forwardedRef={contatoRef} />
                </Suspense>
            </section>
        </div>
    );
}

export default App;
