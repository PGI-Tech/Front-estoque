// Table.js
import React from 'react';
import {
  StyledTableContainer,
  StyledTable,
  StyledTableHeaderRow,
  StyledTableHeaderCell,
  StyledTableRow,
  StyledTableCell,
  DeleteLink,
  EditLink
} from './styles';
//import SelectionOption from '../Select';

const Table = ({ data, title, columnMapping, deleteRoute  }) => {
  if (!data || data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  };

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

  const colunasOriginais = Object.keys(data[0]);

  // Filtra e aplica o mapeamento às colunas
  const colunasRenderizadas = colunasOriginais
    .filter((coluna) => columnMapping[coluna] !== undefined)
    .map((coluna) => columnMapping[coluna]);

  const onDelete = async (rowData) => {
    try {
      const idField = Object.keys(rowData).find((field) => field.startsWith('id'));

      const id = Number(rowData[idField]);
      console.log(`Id da linha: ${id}`)

      const response = await fetch(`${process.env.REACT_APP_API_URL}/${deleteRoute}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${getTokenFromCookies()}`
        }
      });

      if (response.ok) {
        console.log('Categoria excluída com sucesso!');
        alert('Categoria excluída com sucesso!');
        window.location.reload();
      } else {
        console.error('Erro ao excluir categoria:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao excluir categoria:', error.message);
    }
  };

  const returnId = async (rowData) => {
    const idField = Object.keys(rowData).find((field) => field.startsWith('id'));

    const id = Number(rowData[idField]);
    console.log(`Id da linha: ${id}`)
    return id
  };

  return (
    <div>
      <StyledTableContainer>
        <StyledTable>
          <thead>
            <StyledTableHeaderRow>
              {colunasRenderizadas.map((coluna, index) => (
                <StyledTableHeaderCell key={index}>{coluna}</StyledTableHeaderCell>
              ))}
            </StyledTableHeaderRow>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <StyledTableRow key={rowIndex} className={rowIndex % 2 === 1 ? 'even-row' : ''}>
                {colunasOriginais
                  .filter((coluna) => columnMapping[coluna] !== undefined)
                  .map((colunaOriginal, cellIndex) => (
                    <StyledTableCell key={cellIndex}>{rowData[colunaOriginal]}</StyledTableCell>
                  ))}
                  <EditLink>
                    <a>Editar</a>
                  </EditLink>

                  
                  <DeleteLink>
                    <a onClick={() => onDelete(rowData)}>Excluir</a>
                  </DeleteLink>

              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default Table;
