import React, { useState, useEffect } from "react";
import * as C from "../styles";
import Sidebar from "../../../../components/Sidebar";
import ButtonConfirm from '../../../../components/ButtonConfirm';
import ButtonCancel from '../../../../components/ButtonCancel';
import ButtonBack from '../../../../components/ButtonBack';
import routeApi from "../../../../env";

const CadastroEspecieAgulha = () => {
  const [especieAgulha, setEspecieAgulha] = useState('');
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
      const response = await fetch(routeApi + '/especie_agulha', {
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
    if (!especieAgulha) {
      alert("Preencha todos os campos");
      return;
    } 
    else {
      const response = await fetch(routeApi+'/especie_agulha', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'authorization':`Bearer ${getTokenFromCookies()}`},
        body: JSON.stringify({ 
          especie_agulha: especieAgulha 
        })
      })
      
      if(response.ok) {
        alert('Especie de Agulha criada com sucesso!')
        window.location.href = '/cadastros/especieAgulha'
      };
    };
  };

  const onCancel = () => {
    setEspecieAgulha('');
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
        <C.h2>Cadastro de Especie de Agulha</C.h2>

        <C.input
          placeholder="Cadastre a sua Especie Agulha"
          type="Cadastre a sua Especie Agulha"
          value={especieAgulha}
          onChange={(e) => setEspecieAgulha(e.target.value)}
        ></C.input>
        <C.divBtn>
          <ButtonConfirm Text={'Salvar'} onClick={onSave}></ButtonConfirm>
          <ButtonCancel Text={'Cancelar'} onClick={onCancel}>Cancelar</ButtonCancel>
          <ButtonBack Text={'Voltar'} onClick={() => {window.location.href = '/cadastros/especieAgulha'}}>Cancelar</ButtonBack>
        </C.divBtn>
      </C.content>
    </C.div>
  );
};

export default CadastroEspecieAgulha;
