import React, { useEffect, useState } from 'react';
import myPicture from '../images/linkedinPerfil.jpg';
import 'react';
import '../styles/Home.css';
import { Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);
    const [showThirdAnimation, setShowThirdAnimation] = useState(false);
    const [seconds, setSeconds] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSeconds(true);
        }, 3000);
    
        return () => {
            clearTimeout(timeoutId); 
        };
    }, []); 
    
    return (
        <div 
            className={'bio'} 
            id={'bio'} 
        >

            <div className='bio-text'>
                {seconds && <TypeAnimation
                    sequence={[
                        'Aléctor Alexander',
                        0, 
                        () => setShowSecondAnimation(true)
                    ]}
                    className='type-animation'
                    speed={80}
                    wrapper="span"
                    cursor={false}
                    style={{whiteSpace: 'pre-line', fontSize: '46px', display: 'inline-block' }}
                />}
                {showSecondAnimation && <TypeAnimation
                    sequence={[
                        'Um Designer UX',
                        10, 
                        'Um Desenvolvedor Front-End',
                        'Um Desenvolvedor Back-End',
                        2000, 
                        'Um Desenvolvedor Fullstack (por enquanto) Jr  ',
                        'Um Desenvolvedor Fullstack Jr.',
                        2500, 
                        () => setShowThirdAnimation(true)
                    ]}
                    className='type-animation'
                    wrapper="span"
                    cursor={false}
                    deletionSpeed={70}
                    speed={60}
                    style={{whiteSpace: 'pre-line', fontSize: '26px', display: 'inline-block' }}
                />}
               
                {showThirdAnimation && <TypeAnimation
                    sequence={[
                        'Uma meta absurda, um resultado ilógico, seria um sonhador em seu despautérico despropósito? Galopando em disparates de uma aberração; como aquela razão que respira o irracional; aquela alusão ao ilogismo, talvez fosse um delírio, ou um dislate contrassenso, ou até mesmo um desatino alógico; uma piloura; uma insânia; uma insensatez; um desvario; uma esquisitisse? Definitivamente, uma frenesi de porra-louquice.          ',
                        'Gosto muito de me desafiar, aprender, colocar em prática idéias inovadoras e agregar valor por onde passo. Sei trabalhar em equipe, entendo de metodologias ágeis, feedbacks construtivos, auto-liderança e a importância de uma comunicação assetiva e clara. Pensando em longo prazo, meu objetivo é me especializar cada vez mais na área de tecnologia e me tornar um programador formidável aos olhos do mercado e, por conseguinte, aos meus próprios olhos.',
                        0,
                    ]}
                    wrapper="span"
                    speed={115}
                    className='type-animation2'
                    deletionSpeed={99}
                    cursor={true}
                    style={{whiteSpace: 'pre-line', display: 'inline-block' }}
                />}
                {<p>
                
                </p>}
            </div>
            <div className='photo-container'>
                <Image
                    fluid='true'
                    id='my-picture'
                    src={myPicture}
                    style={{opacity: seconds ? 1 : 0, boxShadow: showSecondAnimation ? '22px 22px 32px rgba(0, 0, 0, 0.737)' : '0px 0px 0px rgb(0, 0, 0)'}}
                    alt='sexy-man' />
            </div>

        </div>

    );
}

export default Home;