import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarWrapper, SidebarLink, SidebarSubLink, SidebarItem, SubItem, Image, DivSubMenu } from './styles'; // Certifique-se de importar seus estilos corretamente

const Sidebar = () => {
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

  return (
    <div style={sidebarContainerStyle}>
      {isSidebarOpen && (
        <SidebarWrapper style={sidebarStyle}>
          <h2>Empresa</h2>

          <SidebarItem>
              <SidebarLink to="/home">
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
                  <SidebarSubLink to="/classe">Classe</SidebarSubLink>
                </SubItem>
                <SubItem>
                  <SidebarSubLink to="">Categoria</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Máquina de Agulha</SidebarSubLink>
                </SubItem>
                
                <SubItem>
                  <SidebarSubLink to="">Espécie de Agulha</SidebarSubLink>
                  </SubItem>
                <SubItem>
                <SidebarSubLink to="">Marca de Agulha</SidebarSubLink>
                </SubItem>
                <SubItem> 
                  <SidebarSubLink to="">Unidade</SidebarSubLink>
                  </SubItem>
                <SubItem> 
                  <SidebarSubLink to="">Permissão</SidebarSubLink>
                  </SubItem>
                <SubItem>
                <SidebarSubLink to="">Tipo de Elástico</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Composição</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Marca Elástico</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Tipo de Linha</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Embalagem</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Tipo Móvel</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Tipo Insumo</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Tipo Máquina</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Marca Móvel</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Marca Insumo</SidebarSubLink>
                </SubItem>
                <SubItem>
                <SidebarSubLink to="">Marca Máquina</SidebarSubLink>
                </SubItem>
              </DivSubMenu>
              
              </>
            )}
          </SidebarItem>
          <SidebarItem>
              <SidebarLink to="/">
                <Image src='/images/elastico.png'></Image>
                Elástico
              </SidebarLink>
          </SidebarItem>

          <SidebarItem>
            <SidebarLink to="/">
              <Image src='/images/agulha.png'></Image>
              Agulha
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/">
              <Image src='/images/linhas.png'></Image>
              Linha
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/">
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
            <SidebarLink to="/">
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
      )}
    </div>
  );
};

const sidebarContainerStyle = {
  display: 'flex',
};

const sidebarStyle = {
  
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
