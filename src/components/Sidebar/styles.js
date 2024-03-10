import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 300px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #00202d;
  color: white;
  padding: 20px 3em;

  h2 {
    margin-bottom: 2em;
  }

  /* Adiciona uma margem à direita para o contêiner de rolagem */
  &::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8a8a8a; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 5px; /* Borda arredondada do "ponteiro" */
  }

  &::-webkit-scrollbar-track {
    background-color: #001821; /* Cor da área de fundo da barra de rolagem */
  }
`;

export const SidebarScrollbar = styled.div`
  /* Adiciona a margem à direita para o contêiner de rolagem */
  margin-right: 8px;
  overflow-y: scroll;
  max-height: 100%;
`;

export const SidebarItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  text-align: left; /* Align the content to the left */
`;

export const SidebarSubLink = styled.a`
  display: flex;
  align-items: center;
  color: #8a8a8a;
  text-decoration: none;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    color: white;
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding-bottom: 1em;
  color: white;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  transition: all 200ms ease;
  text-align: left; /* Align the content to the left */
  padding-left: 10px
  &:hover {
    font-weight: bold;
  }
`;

export const SubItem = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const DivSubMenu = styled.div`
  width: 100%;
  margin-bottom: 1em;
  padding: 10px;
  background-color: #001821;
  border-radius: 10px;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8a8a8a; /* Cor do "ponteiro" da barra de rolagem */
    border-radius: 5px; /* Borda arredondada do "ponteiro" */
  }

  &::-webkit-scrollbar-track {
    background-color: #001821; /* Cor da área de fundo da barra de rolagem */
  }
`;
