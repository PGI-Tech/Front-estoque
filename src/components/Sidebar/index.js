import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
import cookie from 'cookie';
import { SidebarWrapper, SidebarLink, SidebarSubLink, SidebarItem, SubItem, Image, DivSubMenu } from './styles';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSubItems, setShowSubItems] = useState({});

  const handleToggleSubItems = (item) => {
    setShowSubItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleLogout = () => {
    // Exclui o cookie
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1, // Define a idade máxima como -1 para excluir o cookie
      path: '/',
      sameSite: 'strict'
    });

    // Redireciona para a página de login
    navigate("/signin");
  };

  const isCurrentPath = (prefix) => location.pathname.startsWith(prefix);

  return (
    <div> 
      <SidebarWrapper>
        <h2>Empresa</h2>
      
        <SidebarItem>
            <SidebarLink style={{ color: isCurrentPath('/home') ? 'white' : 'gray' }} href="/home" >
              <Image src='/images/home.png'></Image>
              Home
            </SidebarLink>
        </SidebarItem>

        <SidebarItem>
          <SidebarLink style={{ color: isCurrentPath('/cadastros') ? 'white' : 'gray' }} onClick={() => handleToggleSubItems('analytics')}>
            <Image src='/images/cadastro.png'></Image>
            Cadastro
          </SidebarLink>
        

          {showSubItems['analytics'] && (
            <>
            <DivSubMenu>  
              <SubItem>
                <SidebarSubLink href="/cadastros/classe">Classe</SidebarSubLink>
              </SubItem>
              <SubItem>
                <SidebarSubLink href="/cadastros/categoria">Categoria</SidebarSubLink>
              </SubItem>
              <SubItem>
              <SidebarSubLink href="/cadastros/maquinaAgulha">Máquina de Agulha</SidebarSubLink>
              </SubItem>
              
              <SubItem>
                <SidebarSubLink href="/cadastros/especieAgulha">Espécie de Agulha</SidebarSubLink>
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
            <SidebarLink style={{ color: isCurrentPath('/elastico') ? 'white' : 'gray' }} href="/">
              <Image src='/images/elastico.png'></Image>
              Elástico
            </SidebarLink>
        </SidebarItem>
      
        <SidebarItem>
          <SidebarLink style={{ color: isCurrentPath('/agulha') ? 'white' : 'gray' }} href="/">
            <Image src='/images/agulha.png'></Image>
            Agulha
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink style={{ color: isCurrentPath('/linha') ? 'white' : 'gray' }} href="/">
            <Image src='/images/linhas.png'></Image>
            Linha
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink style={{ color: isCurrentPath('/tecido') ? 'white' : 'gray' }} href="/">
            <Image src='/images/tecido.png'></Image>
            Tecido
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink style={{ color: isCurrentPath('/configuracao') ? 'white' : 'gray' }} onClick={() => handleToggleSubItems('settings')}>
            <Image src='/images/config.png'></Image>
            Configuração
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink style={{ color: isCurrentPath('/logout') ? 'white' : 'gray' }} onClick={() => handleLogout()}>
            <Image src='/images/logout.png'></Image>
            Logout
          </SidebarLink>
        </SidebarItem>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;