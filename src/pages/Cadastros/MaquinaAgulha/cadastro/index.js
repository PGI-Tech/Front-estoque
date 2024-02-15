import React, { useState, useEffect } from "react";
import * as C from "../styles";
import Sidebar from "../../../../components/Sidebar";
import ButtonConfirm from '../../../../components/ButtonConfirm';
import ButtonCancel from '../../../../components/ButtonCancel';
import ButtonBack from '../../../../components/ButtonBack';

const CadastroMaquinaAgulha = () => {
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

  const onSave = async () => {
    if (!maquinaAgulha) {
      alert("Preencha todos os campos");
      return;
    } 
    else {
      const response = await fetch(process.env.REACT_APP_API_URL+'/maquina_agulha', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'authorization':`Bearer ${getTokenFromCookies()}`},
        body: JSON.stringify({ 
          maquina_agulha: maquinaAgulha 
        })
      })
      
      if(response.ok) {
        alert('Maquina Agulha criada com sucesso!')
        window.location.href = '/cadastros/maquinaAgulha'
      };
    };
  };

  const onCancel = () => {
    setMaquinaAgulha('');
  };

  return (
    <C.div>
      <div>
        <Sidebar />
      </div>
      <C.content>
        <C.h2>Cadastro de Máquina de Agulha</C.h2>

        <C.input
          placeholder="Cadastre a sua Máquina de Agulha"
          type="Cadastre a sua Máquina de Agulha"
          value={maquinaAgulha}
          onChange={(e) => setMaquinaAgulha(e.target.value)}
        ></C.input>
        <C.divBtn>
          <ButtonConfirm Text={'Salvar'} onClick={onSave}></ButtonConfirm>
          <ButtonCancel Text={'Cancelar'} onClick={onCancel}></ButtonCancel>
          <ButtonBack Text={'Voltar'} onClick={() => {window.location.href = '/cadastros/maquinaAgulha'}}>Cancelar</ButtonBack>
        </C.divBtn>
      </C.content>
    </C.div>
  );
};

export default CadastroMaquinaAgulha;
