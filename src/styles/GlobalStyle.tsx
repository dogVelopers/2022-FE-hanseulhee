import { createGlobalStyle } from 'styled-components';

function GlobalStyle() {
  return <StyledGlobal></StyledGlobal>;
}

export default GlobalStyle;

const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: keep-all;
  }
  
  html,
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
    color: #faebd7;
  }

  a, input{
    all: unset;
    cursor: pointer;
  }
`;
