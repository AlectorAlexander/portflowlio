import React, { useEffect, useState } from 'react';
import myPicture from '../images/linkedinPerfil.jpg';
import 'react';
import '../styles/Home.css';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const Home = React.forwardRef(({setHeaderShow, forwardedRef}) => {
    const [showSecondAnimation, setShowSecondAnimation] = useState(false);
    const [showThirdAnimation, setShowThirdAnimation] = useState(false);
    const [seconds, setSeconds] = useState(false);

    useEffect(() => {
        if (showSecondAnimation) {
            setHeaderShow(true);
        }
    }, [showSecondAnimation]);

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
            ref={forwardedRef} data-type='home'
            className={'bio'} 
            id={'bio'} 
        >

            <div className='bio-text mt-5'>
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
                        'Um Desenvolvedor Fullstack',
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
                        'Sou calmo e simpático. Gosto de canela...          ',
                        'Gosto de provocar limites, sugar lições do caos, moldar loucuras em ato e largar faíscas vívidas onde meus passos queimam. Sei dançar em equipe, navego por métodos ágeis, engulo farpas como bela joia, e cultivo a lei vip da autoliderança com fala limpa e propósito firme. No horizonte que rabisco quero mergulhar cada vez mais fundo na tecnologia e ressurgir como um programador notável — bajulado pelo mercado, mas acima de tudo, aprovado pelo espelho.',
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
});

Home.displayName = 'ProjectsBanner';


Home.propTypes = {
    setHeaderShow: PropTypes.func.isRequired,
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired
};


export default Home;