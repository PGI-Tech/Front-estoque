import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import routeApi from "../../env";

const Signup = () => {
  const [Usuário, setUsuário] = useState("");
  const [UsuárioConf, setUsuárioConf] = useState("");
  const [permissao, setPermissao] = useState();
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!Usuário || !UsuárioConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } 
    else if (Usuário !== UsuárioConf) {
      setError("Os Usuários não são iguais");
      return;
    }

    /*
    const res = signup(Usuário, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/"); 
    */
  };

  useEffect(() =>{
    const getPermission= async () => {
      const response = await fetch(routeApi+'/permissao', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })

      if (response.ok) {
        const data = response.json();
        setPermissao(data);
        console.log(permissao)
      }
    }

    getPermission()
  }, []);

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
