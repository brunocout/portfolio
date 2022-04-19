import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        /* Base Colors */
        --primary-color: #150050;
        --segundary-color: #3F0071;
        --tertary-color: #610094;
        /* System Colors */
        --background-color: #111111;
        --text-color: #EEEEEE;
        --shadow-color: rgba(0, 0, 0.1); 
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 69.5%;
    }

    body {
        background-color: var(--background-color);
    }
`

export default GlobalStyle