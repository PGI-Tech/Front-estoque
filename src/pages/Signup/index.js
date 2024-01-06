import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import routeApi from "../../env";

const Signup = () => {
  const [usuario, setUsuario] = useState("");
  const [usuarioConf, setUsuarioConf] = useState("");
  const [permissao, setPermissao] = useState(3);
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!usuario || !usuarioConf || !permissao || !senha) {
      setError("Preencha todos os campos");
      return;
    } 
    else if (usuario !== usuarioConf) {
      setError("Os Usuários não são iguais");
      return;
    } 
    else {
      const response = await fetch(routeApi+'/usuarios', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username: usuario, senha: senha, id_permissao:permissao })
      })
      
      if(response.ok) {
        alert('Usuário cadastrado com sucesso!')
        navigate("/");
      };
    };
  };

  return (
    <C.Container>
      
      <C.Content>
      <C.Label>CRIE SUA CONTA</C.Label>
        <Input
          type="Usuário"
          placeholder="Digite seu Usuário"
          value={usuario}
          onChange={(e) => [setUsuario(e.target.value), setError("")]}
        />
        <Input
          type="Usuário"
          placeholder="Confirme seu Usuário"
          value={usuarioConf}
          onChange={(e) => [setUsuarioConf(e.target.value), setError("")]}
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
