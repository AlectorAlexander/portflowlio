import React, { useState } from 'react';
import myPicture from '../images/linkedinPerfil.jpg';
import 'react';
import '../styles/Home.css';
import { Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);

    
    return (
        <div className='bio'>
            <div className='bio-text'>
                <TypeAnimation
                    sequence={[
                        'Aléctor Alexander\n Um Designer UX',
                        1000, 
                        'Aléctor Alexander\nUm Desenvolvedor Front-End',
                        'Aléctor Alexander\nUm Desenvolvedor Back-End',
                        2000, 
                        'Aléctor Alexander\nUm Desenvolvedor Fullstack (por enquanto) Jr  ',
                        'Aléctor Alexander\nUm Desenvolvedor Fullstack Jr.',
                        2500, 
                        () => setShowSecondAnimation(true)
                    ]}
                    className='type-animation'
                    wrapper="span"
                    cursor={false}
                    style={{whiteSpace: 'pre-line', fontSize: '26px', display: 'inline-block' }}
                />
                {showSecondAnimation && <TypeAnimation
                    sequence={[
                        'Um absurdo, um ato ilógico, blasfêmico; um despautérico despropósito; um disparate e uma aberração; uma desrazão irracional; um ilogismo; um delírio; um dislate contrassenso; um desatino alógico; uma piloura; uma insânia; uma insensatez; um desvario; uma esquisitisse; uma frenesi de porra-louquice.          ',
                        'Gosto muito de me desafiar, aprender, colocar em prática idéias inovadoras e agregar valor por onde passo. Sei trabalhar em equipe, entendo de metodologias ágeis, feedbacks construtivos, auto-liderança e a importância de uma comunicação assetiva e clara. Pensando em longo prazo, meu objetivo é me especializar cada vez mais na área de tecnologia e me tornar um programador formidável aos olhos do mercado e, por conseguinte, aos meus próprios olhos.',
                        0,
                    ]}
                    wrapper="span"
                    speed={115}
                    className='type-animation2'
                    deletionSpeed={99}
                    cursor={true}
                    style={{whiteSpace: 'pre-line', fontSize: '1rem', display: 'inline-block' }}
                />}
                {<p>
                
                </p>}
            </div>
            <div className='photo-container'>
                <Image fluid='true' id='my-picture' src={myPicture} alt='sexy-man' />
            </div>

        </div>

    );
}

export default Home;