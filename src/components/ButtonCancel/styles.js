import styled from "styled-components";

export const ButtonCancel = styled.button`
  height: 40px;
  width: auto;
  margin: 1em;
  color: #00202d;
  font-weight: 600;
  padding: 10px 2em;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid #00202d;
  border-radius: 100px;
  transition: all 300ms ease;
  &:hover {
      background-color: transparent;
      border: 2px solid red;
      color: red;
  }
`;