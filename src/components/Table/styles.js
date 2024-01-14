// TableStyles.js
import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  table-layout: auto; /* Adiciona esta propriedade para ajuste automático de colunas */
`;

export const StyledTableHeaderRow = styled.tr`
  border-bottom: 3px solid #ccc;
`;

export const StyledTableHeaderCell = styled.th`
  padding: 10px 0;
  text-align: left;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 2px solid #ddd;
`;

export const StyledTableCell = styled.td`
  padding: 10px 0;
`;

// Adicione mais estilos conforme necessário
