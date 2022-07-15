import { createGlobalStyle } from 'styled-components';
import colors from './Colors';

export const StyledGlobal = createGlobalStyle`
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
    background-color: ${colors.black};
    color: ${colors.beige}
  }

  a, input, button{
    all: unset;
    cursor: pointer;
  }
`;
