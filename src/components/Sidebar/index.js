import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  max-height : 100vh;
  overflow-y:  auto;
  background-color: #00202d;
  color: white;
  padding: 20px;
`;

const SidebarItem = styled.div`
  margin-bottom: 10px;
`;

const SidebarLink = styled.a`
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

const SubItem = styled.div`
  margin-left: 20px;
  padding: 8px 0;
  font-size: 14px;
`;

const Sidebar = () => {
  const [showSubItems, setShowSubItems] = useState({});

  const handleToggleSubItems = (item) => {
    setShowSubItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div> 
      <SidebarWrapper>
        <h2>Empresa</h2>
      
        
        <SidebarItem>
          <SidebarLink onClick={() => handleToggleSubItems('analytics')}>
            Cadastro
          </SidebarLink>
        

          {showSubItems['analytics'] && (
            <>
              <SubItem>
                <SidebarLink href="/classe">Classe</SidebarLink>
              </SubItem>
              <SubItem>Categoria</SubItem>
              <SubItem>Máquina de Agulha</SubItem>
              <SubItem>Espécie de Agulha</SubItem>
              <SubItem>Marca de Agulha</SubItem>
              <SubItem>Unidade</SubItem>
              <SubItem>Permissão</SubItem>
              <SubItem>Tipo de Elástico</SubItem>
              <SubItem>Composição</SubItem>
              <SubItem>Marca de Elástico</SubItem>
              <SubItem>Tipo de Linha</SubItem>
              
            </>
          )}
        </SidebarItem>
      
    
        <SidebarItem>
          <SidebarLink href="/">Elástico</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">Agulha</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">Linha</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">Tecido</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink onClick={() => handleToggleSubItems('settings')}>
            Settings
          </SidebarLink>
        
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">Logout</SidebarLink>
        </SidebarItem>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;