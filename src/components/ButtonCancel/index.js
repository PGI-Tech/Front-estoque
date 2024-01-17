import React from "react";
import * as C from "./styles";

const ButtonCancel = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.ButtonCancel Text={Text} type={Type} onClick={onClick}>
      {Text}
    </C.ButtonCancel>
  );
};

export default ButtonCancel;