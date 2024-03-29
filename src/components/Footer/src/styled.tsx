import { styled } from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 60px;

  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    color: #c5c5c5;
    font: 1.1em Source Sans Pro;
  }
  svg {
    height: 0.9em;
    width: 0.9em;
    color: #c5c5c5;
    margin-right: 0.2em;
  }
`;
