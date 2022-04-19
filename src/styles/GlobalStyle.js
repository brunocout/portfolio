import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap');

    :root {
        /* Base Colors */
        --primary-color: #150050;
        --segundary-color: #3F0071;
        --tertary-color: #610094;
        /* System Colors */
        --background-color: #10121A;
        --text-color: #EEEEEE;
        --shadow-color: rgba(0, 0, 0.1); 
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