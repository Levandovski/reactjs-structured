import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --main: #fff;
        --secondary: #ccc;
    }

    *{
        margin: 0;
        padding:0;        
        box-sizing: border-box;
    }

`;