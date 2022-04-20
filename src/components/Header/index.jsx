import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
    height: 3rem;

    .navbar {
        max-width: 300px;
    }

    .navbar > button {
        padding: .5rem;
    }

    .logo {
        cursor: pointer;
    }
    

    span {
        color: var(--tertary-color);
    }

    h1 {
        font-size: 1.8rem;
    }
`

function Header() {
    return (
        <StyledHeader>

            <div className="logo">
                <h1>bruno <span>cout</span></h1>
            </div>
            
            <div className='navbar'>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Portfolio</Button>
                <Button>Contact</Button>
            </div>
        </StyledHeader>
    );
}

export default Header