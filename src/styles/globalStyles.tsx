import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;    
    background-color: #101010;
  }
  body {
    background: url('/imgs/20513-back-pc.jpg');
    background-size: cover;
    background-position: left;
  }

  #__next {
    position: relative;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: ${(props) => props.theme.PAGE_BACK_COLOR};
  }
`;

export default GlobalStyles;
