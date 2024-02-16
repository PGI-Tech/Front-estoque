// Table.js
import React from 'react';
import {
  StyledTableContainer,
  StyledTable,
  StyledTableHeaderRow,
  StyledTableHeaderCell,
  StyledTableHeaderCellIndex,
  StyledTableRow,
  StyledTableCell,
  StyledTableCellRed,
  EditLink
} from './styles';

const TableProdutos = ({ data, title, columnMapping, showIndex  }) => {
  if (!data || data.length === 0) {
    return <p>Nenhum dado disponível.</p>;
  };

  const colunasOriginais = Object.keys(data[0]);

  // Filtra e aplica o mapeamento às colunas
  // const colunasRenderizadas = colunasOriginais
  //   .filter((coluna) => columnMapping[coluna] !== undefined)
  //   .map((coluna) => columnMapping[coluna]);
  const colunasRenderizadas = Object.keys(columnMapping).map(coluna => columnMapping[coluna]);


  return (
    <div>
      <StyledTableContainer>
        <StyledTable>
          <thead>
          <StyledTableHeaderRow>
            {showIndex && <StyledTableHeaderCell></StyledTableHeaderCell>}
            {colunasRenderizadas.map((coluna, index) => (
              <StyledTableHeaderCell key={index}>{coluna}</StyledTableHeaderCell>
            ))}
          </StyledTableHeaderRow>
          </thead>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <StyledTableRow key={rowIndex} className={rowIndex % 2 === 1 ? 'even-row' : ''}>
                {showIndex && <StyledTableCell>{rowIndex + 1}</StyledTableCell>}
                {Object.keys(columnMapping).map((colunaOriginal, cellIndex) => (
                  columnMapping[colunaOriginal] === 'Em Falta' && rowData[colunaOriginal] === 'SIM' ? (
                    <StyledTableCellRed key={cellIndex}>{rowData[colunaOriginal]}</StyledTableCellRed>
                  ) : (
                    <StyledTableCell key={cellIndex}>{rowData[colunaOriginal]}</StyledTableCell>
                  )
                ))}
                  <EditLink>
                    <a>Visualizar</a>
                  </EditLink>
                  
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  );
};

export default TableProdutos;
