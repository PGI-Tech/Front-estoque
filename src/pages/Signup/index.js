import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [Usuário, setUsuário] = useState("");
  const [UsuárioConf, setUsuárioConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!Usuário | !UsuárioConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (Usuário !== UsuárioConf) {
      setError("Os Usuários não são iguais");
      return;
    }

    const res = signup(Usuário, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      
      <C.Content>
      <C.Label>CRIE SUA CONTA</C.Label>
        <Input
          type="Usuário"
          placeholder="Digite seu Usuário"
          value={Usuário}
          onChange={(e) => [setUsuário(e.target.value), setError("")]}
        />
        <Input
          type="Usuário"
          placeholder="Confirme seu Usuário"
          value={UsuárioConf}
          onChange={(e) => [setUsuárioConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
