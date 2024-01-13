import React, { useState } from "react";
import * as C from "./styles"
import Sidebar from "../../components/Sidebar"


const Classe = () => {
    const [classe, setClasse] = useState('')

    const onSave = () => {
        console.log(`Classe: ${classe}`);
    };

    const onCancel = () => {
        setClasse('');
    };

    return (
        <C.div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <C.content>
                <C.h2>Classe</C.h2>
                
                <C.input
                placeholder="Cadastre a sua classe"
                    type="Cadastre a sua classe"
                    value={classe}
                    onChange={(e) => setClasse(e.target.value)}>
                </C.input>
                <C.divBtn>
                    <C.buttonSave onClick={onSave}>Salvar</C.buttonSave>
                    <C.buttonCancel onClick={onCancel}>Cancelar</C.buttonCancel>
                </C.divBtn>
            </C.content>
        </C.div>
    );
};

export default Classe;