import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 45px;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 220px);

  a {
    margin: 10px 0;
    width: 30px;
    height: 30px;
    color: #a2a2a2;

    &:first-of-type {
      margin-top: 20px;
    }
    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  &::before,
  &::after {
    display: inline-flex;
    content: "";
    width: 1px;
    color: white;
    background-color: #454545;
    height: calc(50vh - 120px - 55px);
  }
  &::before {
    height: calc(50vh - 120px - 55px);
  }
  &::after {
    height: calc(50vh - 60px - 55px);
  }
`;
