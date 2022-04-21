import styled from 'styled-components';

const StyledSkills = styled.div`
    position: absolute;
    background-color: #1a1f30;
    width: 100vw;
    left: 0;

    span {
        color: var(--tertary-color);
    }

`;

function Skills() {
    return ( 
        <StyledSkills>
            <span>--skills</span>
            
        </StyledSkills>
     );
}

export default Skills;