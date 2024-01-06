import React from "react";
import * as C from "./styles";

const Table = ({ columns, onEditClick, onDeleteClick, columnMappings, routeApi }) => {
  return (
    <C.Table
        columns={columns}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        columnMappings={columnMappings}
        routeApi={routeApi}
    />
  );
};

export default Input;
