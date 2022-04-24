import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledHeader = styled.div`
    position: fixed;
    width: 100vw;
    left: 0;
    transition: .3s;
    z-index: 1;
    background-color: ${props => props.scrolled.background};
    box-shadow: ${props => props.scrolled.boxShadow};
    padding: ${props => props.scrolled.padding};
    transition: all 500ms ease-in-out;

    .navbar-container {
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1320px;
        width: 100%;
        padding: 2rem;
        height: 3rem;
    }

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

    const [show, setShow] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    const scrolled = {
        background: '#00000060',
        boxShadow: '0 5px 20px 0.1px rgba(0, 0, 0, 0.1)',
        padding: '1rem'
    }

    return (
        <StyledHeader scrolled={show && scrolled}>
            <div className="navbar-container">
                <div className="logo">
                    <h1>bruno <span>cout</span>.</h1>
                </div>
                
                <div className='navbar'>
                    <Button type='nav-link'>Home</Button>
                    <Button type='nav-link'>About</Button>
                    <Button type='nav-link'>Portfolio</Button>
                    <Button type='nav-link'>Contact</Button>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header