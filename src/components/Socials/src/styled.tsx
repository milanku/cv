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
    padding: 10px 2px;
    width: 30px;
    height: 30px;
    color: #a2a2a2;
    transition: all 0.22s ease;

    &:first-of-type {
      margin-top: 20px;
    }
    &:last-of-type {
      margin-bottom: 20px;
    }

    &:hover {
      width: 34px;
      height: 34px;
      padding: 8px 0;
    }
  }

  &::before,
  &::after {
    display: inline-flex;
    content: "";
    width: 1px;
    color: white;
    background-color: #454545;
    height: calc(50% - 70px);
  }
  
`;
