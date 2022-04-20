import styled from 'styled-components';
import Button from '../Button';

const StyledIntroducing = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 150px 100px 150px 100px;
    align-items: center;

    .banner {
        width: 400px;
        min-width: 300px;
    }

    .banner img {
        max-width: 100%;
        border-radius: 50%;
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
                <img src="./src/assets/images/banner.png"/>
            </div>
        </StyledIntroducing>
     );
}
 
export default Introducing;