import styled from 'styled-components';
import Button from '../Button';

const StyledIntroducing = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 150px 100px 150px 100px;
    align-items: center;
    font-size: 1rem;

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
        -webkit-animation: rotating 15s linear infinite;
        -moz-animation: rotating 15s linear infinite;
        -ms-animation: rotating 15s linear infinite;
        -o-animation: rotating 15s linear infinite;
        animation: rotating 15s linear infinite;
    }

    .introducing {
        max-width: 500px;
        font-size: 1.8rem;
    }

    .introducing h1 {
        font-size: 5rem;
    }

    .introducing span {
        color: var(--primary-color);
        font-size: 1rem;
    }

    .buttons-container {
        font-size: 1.2rem;
        margin-top: 25px;
    }

    @keyframes rotating {
        from {
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    
`;


function Introducing() {
    return ( 
        <StyledIntroducing>
            <div className="introducing">
                <span>-- Introducing</span>
                <h1>Hello I'm Bruno Coutinho</h1>
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
 
export default Introducing;