import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@100;400;700&display=swap');

    :root {
        /* Base Colors */
        --primary-color: #610094;
        --secondary-color: #3F0071;
        --tertary-color: #b121be;
        /* System Colors */
        --background-color: #10121A;
        --transparent-bg-color: #10121A;
        --skills-bg-color: #1a1f30;
        --text-color: #EEEEEE;
        --shadow-color: rgba(0, 0, 0.1);
        --animation-button-color: #daa520d1;
        --a-second-color: #1cfefc;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html {
        font-size: 69.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--background-color);
        height: 100vh;
    }
`

export default GlobalStyle