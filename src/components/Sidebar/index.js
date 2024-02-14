import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
import cookie from 'cookie';
import { SidebarWrapper, SidebarLink, SidebarSubLink, SidebarItem, SubItem, Image, DivSubMenu, sidebarContainerStyle, sidebarStyle, toggleButtonStyle } from './styles';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSubItems, setShowSubItems] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    verificarTamanhoDaTela(); // Chama a função quando o componente for montado
    window.addEventListener('resize', verificarTamanhoDaTela); // Adiciona um listener de redimensionamento para chamar a função quando a tela for redimensionada
    return () => {
      window.removeEventListener('resize', verificarTamanhoDaTela); // Remove o listener quando o componente for desmontado
    };
  }, []); // Dependência vazia para garantir que o useEffect seja executado apenas uma vez no início

  const handleToggleSubItems = (item) => {
    setShowSubItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  function verificarTamanhoDaTela() {
    // Obtém a largura da tela
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Verifica se a largura é menor que 1000 pixels
    if (larguraTela < 1000) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }

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
      <div style={sidebarContainerStyle}>
      {isSidebarOpen && ( 
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
      )}
      {isSidebarOpen ? (
        <button onClick={handleToggleSidebar} style={toggleButtonStyle}>
          <Image src='/images/flecha.png'></Image>
        </button>
      ) : (
        <button onClick={handleOpenSidebar} style={toggleButtonStyle}>
        <Image src='/images/menu.png'></Image>
        </button>
      )}</div>
    </div>
  );
};

export default Sidebar;