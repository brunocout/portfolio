import styled from 'styled-components';

const StyledIntroducing = styled.div`

    display: flex;
    .banner img {
        width: 80%;
        border-radius: 50%;
    }
`;


function Introducing() {
    return ( 
        <StyledIntroducing>
            <div className="introducing">
                <span>-- Introducing</span>
                <h1>Hello I'm Bruno Coutinho</h1>
                <p>Systems analyst student, passionate about development and technology.</p>
            </div>
            <div className="banner">
                <img src="./src/assets/images/banner.png"/>
            </div>
        </StyledIntroducing>
     );
}
 
export default Introducing;