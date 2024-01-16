import React, { useState } from 'react';
import { SidebarWrapper, SidebarLink, SidebarSubLink, SidebarItem, SubItem, Image } from './styles';

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
            <SidebarLink href="/home">
              <Image src='/images/home.png'></Image>
              Home
            </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink onClick={() => handleToggleSubItems('analytics')}>
            <Image src='/images/cadastro.png'></Image>
            Cadastro
          </SidebarLink>
        

          {showSubItems['analytics'] && (
            <>
              <SubItem>
                <SidebarSubLink href="/classe">Classe</SidebarSubLink>
              </SubItem>
              <SubItem>
                <SidebarSubLink href="">Categoria</SidebarSubLink>
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
          <SidebarLink href="/">
            <Image src='/images/elastico.png'></Image>
            Elástico
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">
            <Image src='/images/agulha.png'></Image>
            Agulha
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">
            <Image src='/images/linhas.png'></Image>
            Linha
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink href="/">
            <Image src='/images/tecido.png'></Image>
            Tecido
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink onClick={() => handleToggleSubItems('settings')}>
            <Image src='/images/config.png'></Image>
            Settings
          </SidebarLink>
        
        </SidebarItem>
        <SidebarItem>
          <SidebarSubLink href="/">
            <Image src='/images/logout.png'></Image>
            Logout
          </SidebarSubLink>
        </SidebarItem>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;