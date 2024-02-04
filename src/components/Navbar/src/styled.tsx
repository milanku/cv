import { styled } from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  padding-left: 40px;
  width: calc(100vw - 40px);
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  svg {
    fill: white;
    width: 3em;
    height: 3em;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;

    li {
      padding: 0 25px;
      color: white;
      list-style-type: none;
      text-transform: uppercase;
      font: 1em Source Sans Pro;

      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const NavbarMail = styled.div`
  margin-left: auto;
  margin-right: 40px;
  a {
    color: white;
    font: 1em Source Sans Pro;
  }
`;
