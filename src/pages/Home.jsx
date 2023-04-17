import React, { useState } from 'react';
import myPicture from '../images/linkedinPerfil.jpg';
import 'react';
import '../styles/Home.css';
import { Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

function Home() {
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);

    
    return (
        <div className='bio d-flex justify-content-center align-items-center'>
            <div className='bio-text m-5 p-5'>
                <TypeAnimation
                    sequence={[
                        'Aléctor Alexander\n Um Designer UX',
                        1000, 
                        'Aléctor Alexander\nUm Desenvolvedor Front-End',
                        'Aléctor Alexander\nUm Desenvolvedor Back-End',
                        2000, 
                        'Aléctor Alexander\nUm Desenvolvedor Fullstack (por enquanto) Jr',
                        'Aléctor Alexander\nUm Desenvolvedor Fullstack Jr.',
                        2500, 
                        () => setShowSecondAnimation(true)
                    ]}
                    className='type-animation'
                    wrapper="span"
                    cursor={true}
                    style={{whiteSpace: 'pre-line', fontSize: '28px', display: 'inline-block' }}
                />
                {showSecondAnimation && <TypeAnimation
                    sequence={[
                        'Para iniciar um novo projeto com Vite.js e React, você pode seguir os seguintes passos:  Certifique-se de ter o Node.js instalado em seu computador. Você pode fazer o download e instalá-lo em https://nodejs.org/. Abra o terminal do seu sistema operacional e crie uma nova pasta para o seu projeto. Navegue até esta pasta usando o comando cd.Execute o seguinte comando para criar um novo projeto React com Vite.js:',
                        0,
                    ]}
                    wrapper="span"
                    speed={115}
                    cursor={true}
                    style={{whiteSpace: 'pre-line', fontSize: '1rem', display: 'inline-block' }}
                />}
                {<p>
                
                </p>}
            </div>
            <div className='photo-container'>
                <Image fluid='true' id='my-picture' src={myPicture} alt='homem-gostoso' />
            </div>

        </div>

    );
}

export default Home;