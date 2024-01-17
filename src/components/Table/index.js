// Table.js
import React from 'react';
import {
  StyledTableContainer,
  StyledTable,
  StyledTableHeaderRow,
  StyledTableHeaderCell,
  StyledTableRow,
  StyledTableCell,
} from './styles';

const Table = ({ data, title, columnMapping, showIndex }) => {
  if (!data || data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  }

  const colunasOriginais = Object.keys(data[0]);

  // Filtra e aplica o mapeamento às colunas
  const colunasRenderizadas = colunasOriginais
    .filter((coluna) => columnMapping[coluna] !== undefined)
    .map((coluna) => columnMapping[coluna]);

  return (
    <div>
      <h3>{title}</h3>
      <StyledTableContainer>
        <StyledTable>
          <thead>
            <StyledTableHeaderRow>
              {showIndex && <StyledTableHeaderCell>Índice</StyledTableHeaderCell>}
              {colunasRenderizadas.map((coluna, index) => (
                <StyledTableHeaderCell key={index}>{coluna}</StyledTableHeaderCell>
              ))}
            </StyledTableHeaderRow>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <StyledTableRow key={rowIndex} className={rowIndex % 2 === 1 ? 'even-row' : ''}>
                {showIndex && <StyledTableCell>{rowIndex + 1}</StyledTableCell>}
                {colunasOriginais
                  .filter((coluna) => columnMapping[coluna] !== undefined)
                  .map((colunaOriginal, cellIndex) => (
                    <StyledTableCell key={cellIndex}>{rowData[colunaOriginal]}</StyledTableCell>
                  ))}
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default Table;
