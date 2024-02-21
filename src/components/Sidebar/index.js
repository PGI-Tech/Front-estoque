import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import { useNavigate } from "react-router-dom";
import cookie from 'cookie';
import { SidebarWrapper, SidebarLink, SidebarSubLink, SidebarItem, SubItem, Image, DivSubMenu } from './styles';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSubItems, setShowSubItems] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    verificarTamanhoDaTela();
    window.addEventListener('resize', verificarTamanhoDaTela);
    return () => {
      window.removeEventListener('resize', verificarTamanhoDaTela);
    };
  }, []);

  const handleToggleSubItems = (item) => {
    setShowSubItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function verificarTamanhoDaTela() {
    const larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setIsSidebarOpen(larguraTela >= 1000);
  }

  const handleLogout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1,
      path: '/',
      sameSite: 'strict'
    });
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
                  <SubItem>
                  <SidebarSubLink href="">Embalagem</SidebarSubLink>
                  </SubItem>
                  <SubItem>
                  <SidebarSubLink href="">Tipo Móvel</SidebarSubLink>
                  </SubItem>
                  <SubItem>
                  <SidebarSubLink href="">Tipo Insumo</SidebarSubLink>
                  </SubItem>
                  <SubItem>
                  <SidebarSubLink href="">Tipo Máquina</SidebarSubLink>
                  </SubItem>
                  <SubItem>
                  <SidebarSubLink href="">Marca Móvel</SidebarSubLink>
                  </SubItem>
                  <SubItem>
                  <SidebarSubLink href="">Marca Insumo</SidebarSubLink>
                  </SubItem>
                  <SubItem>
                  <SidebarSubLink href="">Marca Máquina</SidebarSubLink>
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
        <button onClick={handleToggleSidebar} style={toggleButtonStyle}>
          <Image src={isSidebarOpen ? '/images/flecha.png' : '/images/menu.png'}></Image>
        </button>
      </div>
    </div>
  );
};

const sidebarContainerStyle = {
  display: 'flex',
};

const toggleButtonStyle = {
  borderRadius:'0 0 10px 0',
  padding: '10px',
  height: '80px',
  backgroundColor: '#00202d',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Sidebar;