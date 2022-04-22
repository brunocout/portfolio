import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledHeader = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1320px;
    width: 100%;
    padding: 2rem;
    height: 3rem;
    transition: .3s;
    z-index: 1;
    background-color: ${props => props.scrolled.backgroud};
    box-shadow: ${props => props.scrolled.boxShadow};

    .navbar {
        max-width: 300px;
    }

    .logo {
        font-family: 'Abril Fatface', cursive;
        cursor: pointer;
        font-size: .9rem;
    }
    

    span {
        color: var(--primary-color);
    }

`

function Header() {

    const [scrolled, setScrolled] = useState()

    useEffect(() => {
        if (window.pageYOffset > 0) {
            setScrolled({
                backgroud: `#08102eb5`,
                boxShadow: `0 5px 20px 0.1px rgba(0, 0, 0, 0.1)`
            })
        }
    }, [window.pageYOffset])

    return (
        <StyledHeader scrolled={scrolled}>
            <div className="logo">
                <h1>bruno <span>cout</span>.</h1>
            </div>
            
            <div className='navbar'>
                <Button type='nav-link'>Home</Button>
                <Button type='nav-link'>About</Button>
                <Button type='nav-link'>Portfolio</Button>
                <Button type='nav-link'>Contact</Button>
            </div>
        </StyledHeader>
    );
}

export default Header