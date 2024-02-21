import React, { useState, useEffect } from "react";
import * as C from "./styles";
import Sidebar from "../../components/Sidebar";
import TableProdutos from "../../components/TableProdutos";


const Home = () => {
  const [tableData, setTableData] = useState([]);
  const [colunas, setColunas] = useState([]);
  const [page, setPage] = useState(1);

  // Seu mapeamento original
const columnMapping = {
  id_categoria: 'Cód. Categoria',
  id_classe: 'Cód. Classe',
  id_unidade: 'Cód. Unidade',
  tipo:'Produto',
  valor: 'Valor (R$)',
  imposto: 'Imposto (%)',
  preco_final: 'Preço Final (R$)',
  data_compra: 'Data Compra',
  em_falta: 'Em Falta',
};

// Mapeamento adicional para agrupar diferentes nomes de colunas sob um único nome
const additionalColumnMapping = {
  estoque: 'Quantidade',
  estoque_cx: 'Quantidade',
  estoque_cone: 'Quantidade',
  // Adicione mais se necessário
};

// Filtra as colunas com dados não nulos ou não vazios
const filteredAdditionalColumnMapping = Object.fromEntries(
  Object.entries(additionalColumnMapping).filter(([key, value]) =>
    tableData.some(row => row[key] !== null && row[key] !== '' && row[key] !== undefined)
  )
);

// Combine os dois mapeamentos
const finalColumnMapping = { ...columnMapping, ...filteredAdditionalColumnMapping };



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
        const response = await fetch(process.env.REACT_APP_API_URL + '/produtos/'+page, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getTokenFromCookies()}`
          },
        });
    
        if (response.ok) {
          const data = await response.json(); // Converte o corpo da resposta para JSON
          if (data.produtos && data.produtos.length > 0) {
            setTableData(data.produtos[0]);
            console.log('Data: '+ JSON.stringify(data.produtos[0]));
            setColunas(Object.keys(data.produtos[0]))
            console.log('data: '+data)
            console.log('tableData: '+tableData)
            console.log('colunas: '+colunas)
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

  return(
    <C.div>
      <div>
      	<div><Sidebar></Sidebar></div>
      
      	<div></div>
      </div>
      <C.content>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <C.h2>Produtos</C.h2>  
        </div>
        <TableProdutos
          showIndex={true}
          data={tableData} 
          Text="Título da Tabela"
          columnMapping={finalColumnMapping}
          deleteRoute={''}
        ></TableProdutos>
      </C.content>
    </C.div>
  );
};

export default Home;