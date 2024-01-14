// Table.js
import React, { useState } from 'react';
import {
  StyledTableContainer,
  StyledTable,
  StyledTableHeaderRow,
  StyledTableHeaderCell,
  StyledTableRow,
  StyledTableCell,
} from './styles';

const Table = ({ Colunas, Data, Text }) => {
  // ... o resto do seu código

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <StyledTableHeaderRow>
            {Colunas.map((coluna, index) => (
              <StyledTableHeaderCell key={index}>{coluna}</StyledTableHeaderCell>
            ))}
          </StyledTableHeaderRow>
        </thead>
        <tbody>
          {Data.map((rowData, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {rowData.map((cellData, cellIndex) => (
                <StyledTableCell key={cellIndex}>{cellData}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default Table;
