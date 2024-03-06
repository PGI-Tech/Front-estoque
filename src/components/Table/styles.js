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
  padding-left: 1em;
  text-align: left;
`;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  color: #000000;
  &.even-row {
    background-color: #f5f5f5; /* ou qualquer outra cor de cinza claro desejada */
  }
`;

export const StyledTableCell = styled.td`
  padding: 10px 0;
  padding-left: 1em;
`;
  
export const DeleteLink = styled.td`
a {
  cursor: pointer;
  color: red;
  text-decoration: none;
  transition: all 300ms ease;
  border-bottom: 2px transparent solid;
}
&:hover {
  a {
    border-bottom: 2px red solid;
  }
}
`;

export const EditLink = styled.td`
  a {
    cursor: pointer;
    color: #000000;
    text-decoration: none;
    transition: all 300ms ease;
    border-bottom: 2px transparent solid;
  }
  &:hover {
    a {
      border-bottom: 2px black solid;
    }
  }
`;