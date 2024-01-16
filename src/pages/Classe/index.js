import React, { useState, useEffect } from "react";
import * as C from "./styles";
import Sidebar from "../../components/Sidebar";
import Table from '../../components/Table';
import routeApi from "../../env";
import cookie from 'cookie';

const Classe = () => {
  const [classe, setClasse] = useState('');
  const [tableData, setTableData] = useState([]);

  const colunas = ['Nome', 'Descrição', 'Código'];

  const getTokenFromCookies = () => {
    const token = cookie.parse(document.cookie.token);
    return token
  };

  const handleData = async () => {
    const response = await fetch(routeApi+'/classe', {
      method: 'GET',
      headers: {'Content-Type': 'application/json',
                'authorization':`Bearer ${getTokenFromCookies()}`},
    })
    
    if(response.ok) {
      const data = JSON.stringify(response);
      setTableData(data);
      console.log(data);
    };
  };

  const onSave = async () => {
    if (!classe) {
      alert("Preencha todos os campos");
      return;
    } 
    else {
      const response = await fetch(routeApi+'/classe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'authorization':`Bearer ${getTokenFromCookies()}`},
        body: JSON.stringify({ 
          classe: classe 
        })
      })
      
      if(response.ok) {
        
      };
    };
  };

  const onCancel = () => {
    setClasse('');
  };

  useEffect(() => {
  handleData()
  }, []);

  return (
    <C.div>
      <div>
        <Sidebar />
      </div>
      <C.content>
        <C.h2>Classe</C.h2>

        <C.input
          placeholder="Cadastre a sua classe"
          type="Cadastre a sua classe"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
        ></C.input>
        <C.divBtn>
          <C.buttonSave onClick={onSave}>Salvar</C.buttonSave>
          <C.buttonCancel onClick={onCancel}>Cancelar</C.buttonCancel>
        </C.divBtn>
        <Table
          Colunas={colunas}
          Data={tableData} // Passando os dados para a tabela
          Text="Título da Tabela"
        ></Table>
      </C.content>
    </C.div>
  );
};

export default Classe;
