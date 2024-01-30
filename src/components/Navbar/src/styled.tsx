import { styled } from "styled-components";

export const Headshot = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 200px;
  background: white;
  display: none;

  img {
    width: 100%;
    height: auto;
  }
`;

export const Triangle = styled.div`
  position: relative;
  background-color: red;
  width: 200px;
  height: 200px;
  border-radius: 100px 0 0 0;

  &:before {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: red;
  }
`;
