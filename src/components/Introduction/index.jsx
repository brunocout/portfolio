import styled from 'styled-components';
import { fadeInUp, rotating, typewriter, blink } from '../../styles/Animations';


import Button from '../Button';

const StyledIntroducing = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 150px 100px 150px 100px;
    align-items: center;
    font-size: 1rem;
    opacity: 0;
    transform: translateY(-3rem);
    animation: ${fadeInUp} 2s ease 250ms forwards;

    .banner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        min-width: 300px;
        cursor: pointer;
    }

    .profile {
        border-radius: 50%;
        max-width: 85%;
    }

    .stacks {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        -webkit-animation: ${rotating} 60s linear infinite;
        -moz-animation: ${rotating} 60s linear infinite;
        -ms-animation: ${rotating} 60s linear infinite;
        -o-animation: ${rotating} 60s linear infinite;
        animation: ${rotating} 60s linear infinite;
    }

    .introducing {
        max-width: 500px;
        font-size: 1.8rem;
    }

    .title {
        position: relative;
        font-size: 3.5rem;
    }

    .title::before,
    .title::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    p {
        font-size: 1.1rem;
        width: 70%;
        color: var(--opacity-text-color);
    }

    .title::before {
        background-color: var(--background-color);
        animation: ${typewriter} 1s steps(19) 350ms forwards;
    }

    .title::after {
        width: 1px;
        background-color: var(--text-color);
        animation: ${typewriter} 1s steps(19) 350ms forwards, ${blink} 1s steps(19) 350ms infinite;
    }

    .buttons-container {
        font-size: 1.2rem;
        margin-top: 25px;
    }

    .developer {
        font-size: 1.5rem;
        padding: 10px;
        border-left: 2px solid var(--primary-color);
    }
    
`;


function Introduction() {
    return ( 
        <StyledIntroducing>
            <div className="introducing">
                <h1 className='developer'>Front-End Developer</h1>
                <h2 className='title'>Hello I'm Bruno Coutinho</h2>
                <p>Systems analyst student, passionate about development and technology.</p>
                <div className="buttons-container">
                    <Button type="contact" component="a" href="mailto:iambrunocout@gmail.com" target="_blank">Contact Me</Button>
                    <Button type="cv" component="a" href="./src/assets/files/Bruno_CV.pdf" target="_blank">Download CV</Button>
                </div>
            </div>
            <div className="banner">
                <img className='stacks' src="./src/assets/images/stacks.png"/>
                <img className="profile" src="./src/assets/images/banner.png"/>
            </div>
        </StyledIntroducing>
     );
}
 
export default Introduction;