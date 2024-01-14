import React, { useState } from 'react';
import { SidebarWrapper, SidebarLink, SidebarItem, SubItem, imgSidebar } from './styles';
import cadastroImagem from '/images/cadastro.png'

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
            <SidebarLink href="/home">Home</SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink onClick={() => handleToggleSubItems('analytics')}>
            <img src={cadastroImagem} alt='cadastro'/>
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