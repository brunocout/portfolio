import styled from 'styled-components';

const StyledCard = styled.div`
  
`;

function Card({ children }) {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    );
}


export default Card;