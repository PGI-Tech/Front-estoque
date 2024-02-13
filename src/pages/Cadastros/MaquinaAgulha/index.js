import React, { useState, useEffect } from "react";
import * as C from "./styles";
import Sidebar from "../../../components/Sidebar";
import Table from '../../../components/Table';
import Button from '../../../components/Button';

const MaquinaAgulha = () => {
  const [maquinaAgulha, setMaquinaAgulha] = useState('');
  const [tableData, setTableData] = useState([]);
  const [colunas, setColunas] = useState([]);

  function getTokenFromCookies() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'token') {
        console.log(`Token: ${value}`)
        return value;
      };
    };
    return null;
  };

  const handleData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/maquina_agulha', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${getTokenFromCookies()}`
        },
      });
  
      if (response.ok) {
        const data = await response.json(); // Converte o corpo da resposta para JSON
        if (data && data.length > 0) {
          setTableData(data);
          console.log(data);
          setColunas(Object.keys(data[0]))
        } else {
          setColunas([]);
          console.error('O array de dados está vazio ou indefinido.');
        };
      } else {
        console.error('Erro na solicitação:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao lidar com os dados:', error);
    }
  };

  useEffect(() => {
  handleData();
  }, []);

  return (
    <C.div>
      <div>
        <Sidebar />
      </div>
      <C.content>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <C.h2>Máquina de Agulha</C.h2>  
        <Button Text={'Nova Máquina'} onClick={() => {window.location.href = '/cadastros/maquinaAgulha/cadastro';}}></Button>
        </div>
        <Table
          showIndex={true}
          data={tableData} 
          Text="Título da Tabela"
          columnMapping={{
            maquina: 'Máquina de Agulha'
          }}
          deleteRoute={'maquina_agulha'}
        ></Table>
      </C.content>
    </C.div>
  );
};

export default MaquinaAgulha;
