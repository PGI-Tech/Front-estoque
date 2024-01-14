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
    margin-top: 1em;
    margin-bottom: 2em;
  }
`;

export const SidebarItem = styled.div`
  margin-bottom: 10px;
`;

export const SidebarLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const SubItem = styled.div`
  margin-left: 20px;
  padding: 8px 0;
  font-size: 14px;
`;

export const imgSidebar = styled.img`
  
`;