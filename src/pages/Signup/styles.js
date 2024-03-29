import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #00202d;
`;

export const Content = styled.div`
  gap: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: auto;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 320px;
  max-height: 420px;
  padding: 20px;
  border-radius: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;