import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  max-height : 100vh;
  overflow-y:  auto;
  background-color: #00202d;
  color: white;
  padding: 20px;
  h2 {
    margin-bottom: 2em;
  };
  
`;

export const SidebarItem = styled.div`
  margin-bottom: 10px;
  
`;

export const SidebarSubLink = styled.a`
  display: flex;
  align-itens: center;
  color: white;
  text-decoration: none;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;


`;
export const SidebarLink = styled.a`
  display: flex;
  align-itens: center;
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    
    font-weight: bold;
  }

`;

export const SubItem = styled.div`
display: flex;
padding-left: 10px;
align-itens: center;
color: white;
text-decoration: none;
background-color: #001821;
font-size: 16px;
cursor: pointer;


`;

export const Image = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;