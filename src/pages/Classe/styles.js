import styled from "styled-components";

export const div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const content = styled.div`
  width: 50%;
`;

export const divBtn = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-end;
`;

export const buttonSave = styled.button`
    height: 40px;
    width: 150px;
    margin: 1em;
    color: white;
    font-weight: 600;
    padding: 12px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: #3ca6a6;
    border: 2px solid #3ca6a6;
    border-radius: 5px;
    transition: all 300ms ease;
    &:hover {
        background-color: white;
        border: 2px solid #3ca6a6;
        color: #3ca6a6;
    }
`;

export const buttonCancel = styled.button`
    height: 40px;
    width: 150px;
    margin: 1em;
    color: #d11507;
    font-weight: 600;
    padding: 12px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background-color: white;
    border: 2px solid #d11507;
    border-radius: 5px;
    transition: all 300ms ease;
    &:hover {
        background-color: #d11507;
        border: 2px solid ##d11507;
        color: white;
    }
`;
export const input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  margin-top: 1em;
  font-size: 16px;
  background-color: #f0f2f5;
  border: none;
`;