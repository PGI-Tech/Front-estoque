import React, { useState } from 'react';
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
import './Table.css'; // Importando arquivo CSS para estilos personalizados

const Table = ({ data, title, columnMapping, deleteRoute }) => {
  if (!data || data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const onDelete = async (rowData) => {
    // Função para excluir a linha de dados
  };

  const onEdit = async (rowData) => {
    // Função para editar a linha de dados
  };

  const toggleCard = (index) => {
    setOpenCardIndex(index === openCardIndex ? null : index);
  };

  return (
    <div>
      <StyledTableContainer>
        <StyledTable>
          <thead>
            <StyledTableHeaderRow>
              {Object.keys(columnMapping).map((coluna, index) => (
                <StyledTableHeaderCell key={index}>{columnMapping[coluna]}</StyledTableHeaderCell>
              ))}
              <StyledTableHeaderCell>Ações</StyledTableHeaderCell>
            </StyledTableHeaderRow>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <StyledTableRow key={rowIndex} className={rowIndex % 2 === 1 ? 'even-row' : ''}>
                {Object.keys(columnMapping).map((colunaOriginal, cellIndex) => (
                  <StyledTableCell key={cellIndex}>{rowData[colunaOriginal]}</StyledTableCell>
                ))}
                <StyledTableCell>
                  <button onClick={() => toggleCard(rowIndex)} className="acoes-button">Ações</button>
                  {openCardIndex === rowIndex && (
                    <div className="card">
                      <EditLink>
                        <button className="edit-button" onClick={() => onEdit(rowData)}>Editar</button>
                      </EditLink>
                      <DeleteLink>
                        <button className="delete-button" onClick={() => onDelete(rowData)}>Excluir</button>
                      </DeleteLink>
                    </div>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default Table;
