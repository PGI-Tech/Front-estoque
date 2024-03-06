import React, { useState, useEffect } from "react";
import * as C from "../styles";
import Sidebar from "../../../../components/Sidebar";
import ButtonConfirm from '../../../../components/ButtonConfirm';
import ButtonCancel from '../../../../components/ButtonCancel';
import ButtonBack from '../../../../components/ButtonBack';
import { useParams } from 'react-router-dom';

const CadastroClasse = () => {
  const [classe, setClasse] = useState('');
  const [tableData, setTableData] = useState([]);
  const [colunas, setColunas] = useState([]);
  const { row } = useParams();

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

  const handleData = async (row) => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/classe', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${getTokenFromCookies()}`
        },
      });
  
      if (response.ok) {
        const data = await response.json(); // Converte o corpo da resposta para JSON
        setTableData(data);
        console.log(data);
        setColunas(Object.keys(data[0]))
      } else {
        console.error('Erro na solicitação:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao lidar com os dados:', error);
    }
  };

  const onSave = async () => {
    if (!classe) {
      alert("Preencha todos os campos");
      return;
    } 
    else {
      const response = await fetch(process.env.REACT_APP_API_URL+'/classe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'authorization':`Bearer ${getTokenFromCookies()}`},
        body: JSON.stringify({ 
          classe: classe 
        })
      })
      
      if(response.ok) {
        alert('Classe criada com sucesso!')
        window.location.href = '/cadastros/classe'
      };
    };
  };

  const onCancel = () => {
    setClasse('');
  };

  useEffect(() => {
    if(row){
      handleData(row);
    }
  }, [row]);

  return (
    <C.div>
      <div>
        <Sidebar />
      </div>
      <C.content>
        <C.h2>Cadastro de Classe</C.h2>

        <C.input
          placeholder="Cadastre a sua classe"
          type="Cadastre a sua classe"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
        ></C.input>
        <C.divBtn>
          <ButtonConfirm Text={'Salvar'} onClick={onSave}></ButtonConfirm>
          <ButtonCancel Text={'Cancelar'} onClick={onCancel}>Cancelar</ButtonCancel>
          <ButtonBack Text={'Voltar'} onClick={() => {window.location.href = '/cadastros/classe'}}>Cancelar</ButtonBack>
        </C.divBtn>
      </C.content>
    </C.div>
  );
};

export default CadastroClasse;
