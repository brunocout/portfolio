import {keyframes} from 'styled-components';

export const fadeInUp = keyframes`
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const rotating = keyframes`
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
`

export const typewriter = keyframes`
    to {
        left: 100%;
    }
`

export const blink = keyframes`
    to {
        opacity: 0;
    }
    from {
        opacity: 1;
    }

`


