import styled from "styled-components";

export const ButtonConfirm = styled.button`
  height: 40px;
  width: auto;
  margin: 1em;
  color: white;
  font-weight: 600;
  padding: 10px 2em;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  background-color: #00202d;
  border: 2px solid transparent;
  border-radius: 100px;
  transition: all 300ms ease;
  &:hover {
      background-color: transparent;
      border: 2px solid #007529;
      color: #007529;
  }
`;