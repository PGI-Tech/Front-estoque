import React from "react";
import * as C from "./styles";

const Select = ({ label, placeholder, value, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <select value={value} onChange={onChange}>
          <option value="" disabled>{placeholder}</option>
          {/* Adicione opções conforme necessário */}
        </select>
      </div>
    );
  };

export default Select;