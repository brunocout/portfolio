import styled from 'styled-components';
import Button from '../Button';

const StyledIntroducing = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 150px 100px 150px 100px;
    align-items: center;

    .banner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;
        min-width: 300px;
    }

    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 5px solid var(--tertary-color);
        border-radius: 50%;
        width: 370px;
        height: 370px;
    }

    .profile > img {
        max-width: 95%;
        border-radius: 50%;
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
        color: var(--tertary-color);
        font-size: 1rem;
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
                <Button type={"btn-cv"}>Download CV</Button>
            </div>
            <div className="banner">
                <img className='stacks' src="./src/assets/images/stacks.png"/>
                <div className="profile">
                    <img src="./src/assets/images/banner.png"/>
                </div>
            </div>
        </StyledIntroducing>
     );
}
 
export default Introducing;