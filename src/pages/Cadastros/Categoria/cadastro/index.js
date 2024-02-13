import React, { useState, useEffect } from "react";
import * as C from "../styles";
import { useParams } from "react-router-dom";
import Sidebar from "../../../../components/Sidebar";
import ButtonConfirm from '../../../../components/ButtonConfirm';
import ButtonCancel from '../../../../components/ButtonCancel';
import ButtonBack from '../../../../components/ButtonBack';

const CadastroCategoria = () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState('');
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
      const response = await fetch(process.env.REACT_APP_API_URL + '/categoria/'+id, {
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
        setColunas(Object.keys(data[0]));
        setCategoria(data[1]);
      } else {
        console.error('Erro na solicitação:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao lidar com os dados:', error);
    }
  };

  const onSave = async () => {
    if (!categoria) {
      alert("Preencha todos os campos");
      return;
    } 
    else {
      const response = await fetch(process.env.REACT_APP_API_URL+'/categoria', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'authorization':`Bearer ${getTokenFromCookies()}`},
        body: JSON.stringify({ 
          categoria: categoria 
        })
      })
      
      if(response.ok) {
        alert('Categoria criada com sucesso!')
        window.location.href = '/cadastros/categoria'
      };
    };
  };

  const onCancel = () => {
    setCategoria('');
  };

  useEffect(() => {
    if (id){
      handleData();
    };
  }, [id]);

  return (
    <C.div>
      <div>
        <Sidebar />
      </div>
      <C.content>
        <C.h2>Cadastro de Categoria</C.h2>

        <C.input
          placeholder="Cadastre a sua Categoria"
          type="Cadastre a sua Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        ></C.input>
        <C.divBtn>
          <ButtonConfirm Text={'Salvar'} onClick={onSave}></ButtonConfirm>
          <ButtonCancel Text={'Cancelar'} onClick={onCancel}></ButtonCancel>
          <ButtonBack Text={'Voltar'} onClick={() => {window.location.href = '/cadastros/categoria'}}>Cancelar</ButtonBack>
        </C.divBtn>
      </C.content>
    </C.div>
  );
};

export default CadastroCategoria;
