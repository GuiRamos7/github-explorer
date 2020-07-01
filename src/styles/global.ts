import { createGlobalStyle } from 'styled-components';
import githubBackground from 'assets/github-assets.svg';

export default createGlobalStyle`

  html {
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background:#f0f0f5 url(${githubBackground}) no-repeat 70% top;
  }
  body, input , button {
    font: 1.6rem Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
  }

  button {
    cursor: pointer;
  }

`;
