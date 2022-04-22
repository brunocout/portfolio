import styled from 'styled-components';

const StyledSkills = styled.div`
    position: absolute;
    background-color: var(--skills-bg-color);
    width: 100%;
    height: 1000px;
    left: 0;

    span {
        color: var(--primary-color);
    }

    .container {
        margin: auto;
        max-width: 1120px;
    }

`;

function Skills() {
    return ( 
        <StyledSkills>
            <div className='container'>
                <span>--skills</span>
                
            </div>
        </StyledSkills>
     );
}

export default Skills;