import { styled } from "styled-components";

export const NavContainer = styled.div`
  position: relative;

  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    padding-left: 40px;
    li {
      padding: 0 20px;
      color: white;
      list-style-type: none;
      text-transform: uppercase;
      font: 1em Source Sans Pro;
    }
  }
`;

export const NavbarMail = styled.div`
  a {
    color: white;
    font: 1em Source Sans Pro;
  }
`;
