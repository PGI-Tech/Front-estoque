import React, { useState } from "react";
import * as C from "./styles";
import Sidebar from "../../components/Sidebar";
import Table from '../../components/Table';

const Classe = () => {
  const [classe, setClasse] = useState('');
  const [tableData, setTableData] = useState([
    ['John Doe', 'Descrição 1', 'Código 1'],
    ['Jane Smith', 'Descrição 2', 'Código 2'],
    // Adicione mais dados conforme necessário
  ]);

  const colunas = ['Nome', 'Descrição', 'Código'];

  const onSave = () => {
    console.log(`Classe: ${classe}`);
    // Aqui você pode adicionar a lógica para salvar os dados na tabela
    setTableData([...tableData, [classe, 'Descrição', 'Código']]);
  };

  const onCancel = () => {
    setClasse('');
  };

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
