import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsBanner from './pages/ProjectsBanner';
import Projects from './pages/Projects';
import CssBaseline from '@mui/material/CssBaseline';
import Contato from './pages/Contato';

function App() {
    const [typeOfProjects, setTypeOfProjects] = useState('Todos');

    useEffect(() => {
        console.log(typeOfProjects);
    }, [typeOfProjects]);

    const handleScroll = () => {
        const scrollPosition = document.documentElement.scrollTop;
        const halfScreenHeight = window.innerHeight / 4;
        
        if (scrollPosition > (halfScreenHeight * 3)) {
            return;
        }
    };
      
    window.addEventListener('scroll', handleScroll);


    return (
        <div className="App">
            <CssBaseline />
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <ProjectsBanner setTypeOfProjects={setTypeOfProjects} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Projects typeOfProjects={typeOfProjects} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Contato />
            </Suspense>
        </div>
    );
}

export default App;
