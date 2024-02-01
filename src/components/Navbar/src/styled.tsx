import { styled } from "styled-components";

const headshot = {
  size: {
    PC: "80px",
    M: "100px",
  },
};

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
    padding-left: 0;
    li {
      padding: 0 20px;
      color: white;
      list-style-type: none;
      text-transform: uppercase;
      font: 1em Source Sans Pro;
    }
  }
`;

export const HeadshotContainer = styled.div``;

export const Headshot = styled.div`
  margin: 20px;
  width: ${headshot.size.PC};
  height: ${headshot.size.PC};
  border-radius: 100%;
  overflow: hidden;
  background: white;

  img {
    width: 100%;
    height: auto;
  }
`;

export const NavbarMail = styled.div`
  a {
    color: white;
    font: 1em Source Sans Pro;
  }
`;
