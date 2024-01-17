import React from "react";
import * as C from "./styles";

const ButtonConfirm = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.ButtonConfirm Text={Text} type={Type} onClick={onClick}>
      {Text}
    </C.ButtonConfirm>
  );
};

export default ButtonConfirm;