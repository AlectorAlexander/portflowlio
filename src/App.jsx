import React, { Suspense, useEffect,  useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
const Header = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./pages/Home'));
const ProjectsBanner = React.lazy(() => import('./pages/ProjectsBanner'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contato =  React.lazy(() => import('./pages/Contato'));
import './App.css';
import Footer from './components/Footer';

function App() {
    const [typeOfProjects, setTypeOfProjects] = useState('Todos');
    const [Ref, setRef] = useState('home');
    const [Component, setComponent] = useState('');
    const [myElementIsVisible, updateMyElementIsVisible] = useState();
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollToComponent = useRef(null);
    const [headerShow, setHeaderShow] = useState(false);

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

    const handleScroll = () => {
        if (scrollToComponent.current) {
            scrollToComponent.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const HomeRef = useRef(null);
    const projectBannerRef = useRef(null);
    const projectsRef = useRef(null);
    const contatoRef = useRef(null);

    useEffect(() => {
        if (headerShow){
            switch (Component) {
            case 'home':
                HomeRef.current.scrollIntoView({ behavior: 'smooth' });
                setComponent('');
                break;
            case 'ProjectBanner':
                projectBannerRef.current.scrollIntoView({ behavior: 'smooth' });
                setComponent('');
                break;
            case 'Contatos':
                contatoRef.current.scrollIntoView({ behavior: 'smooth' });
                setComponent('');
                break;
            default:
                break;
            }
        }
    }, [Component]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // Comentário pra mim. 0.5 é o valor que eu quero que o elemento seja visível.
                    if (entry.intersectionRatio >= 0.5) {
                        setRef(entry.target.dataset.type);
                        updateMyElementIsVisible(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.5 }
        );
        if (HomeRef.current) {
            observer.observe(HomeRef.current);
        }

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
            if (HomeRef.current) {
                observer.unobserve(HomeRef.current);
            }
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
            {headerShow && <Header setComponent={setComponent} Ref={Ref} />}
            <Suspense fallback={<div>Loading...</div>}>
                <Home id="home" forwardedRef={HomeRef} setHeaderShow={setHeaderShow} />
            </Suspense>
            { headerShow && 
            (<div>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProjectsBanner handleScroll={handleScroll} id="projects" componentRef={Ref} visible={myElementIsVisible} forwardedRef={projectBannerRef} setTypeOfProjects={setTypeOfProjects} />
                </Suspense><Suspense fallback={<div>Loading...</div>}>
                    <section ref={scrollToComponent}>
                        <Projects componentRef={Ref} visible={myElementIsVisible} forwardedRef={projectsRef} typeOfProjects={typeOfProjects} />
                    </section>
                </Suspense><section>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Contato  id="contato" componentRef={Ref} visible={myElementIsVisible} forwardedRef={contatoRef} />
                    </Suspense>
                    <Footer forwardedRef={contatoRef} />

                </section></div>)}
        </div>
    );
}

export default App;
