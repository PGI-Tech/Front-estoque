import React, { useState } from 'react';
import { SidebarWrapper, SidebarLink, SidebarSubLink, SidebarItem, SubItem, Image, DivSubMenu } from './styles';

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
            <DivSubMenu>  
              <SubItem>
                <SidebarSubLink href="/classe">Classe</SidebarSubLink>
              </SubItem>
              <SubItem>
                <SidebarSubLink href="">Categoria</SidebarSubLink>
              </SubItem>
              <SubItem>
              <SidebarSubLink href="">Máquina de Agulha</SidebarSubLink>
              </SubItem>
              
              <SubItem>
                <SidebarSubLink href="">Espécie de Agulha</SidebarSubLink>
                </SubItem>
              <SubItem>
              <SidebarSubLink href="">Marca de Agulha</SidebarSubLink>
              </SubItem>
              <SubItem> 
                <SidebarSubLink href="">Unidade</SidebarSubLink>
                </SubItem>
              <SubItem> 
                <SidebarSubLink href="">Permissão</SidebarSubLink>
                </SubItem>
              <SubItem>
              <SidebarSubLink href="">Tipo de Elástico</SidebarSubLink>
              </SubItem>
              <SubItem>
              <SidebarSubLink href="">Composição</SidebarSubLink>
              </SubItem>
              <SubItem>
              <SidebarSubLink href="">Marca Elástico</SidebarSubLink>
              </SubItem>
              <SubItem>
              <SidebarSubLink href="">Tipo de Linha</SidebarSubLink>
              </SubItem>
            </DivSubMenu>
            
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
          <SidebarLink href="/">
            <Image src='/images/logout.png'></Image>
            Logout
          </SidebarLink>
        </SidebarItem>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;