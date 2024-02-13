import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import cookie from 'cookie';


const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [usuário, setusuário] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!usuário || !senha) { // verifica se os campos não estão vazios
      setError("Preencha todos os campos")
    } 
    else {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+'/auth', { // routeApi é a rota padrão da API
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: usuário, senha: senha })
        })

        if (response.ok) {
          const data = await response.json();
          const token = data.token;

          document.cookie = cookie.serialize('token', token, {
            maxAge: 28800, // Tempo de vida do cookie em segundos (1 hora)
            path: '/', // Caminho do cookie
            sameSite: 'strict' // Restringe o cookie a solicitações do mesmo site
          })
          console.log('Cadastro realizado com sucesso!');
          navigate("/home");
        }
        else {
          alert('Erro ao tentar logar!')
        }
      } 
      catch (error) {
        alert.error('Erro ao fazer login:', error);
        console.error('Erro ao fazer login:', error);
      }
    }

    /* 
    const res = signin(usuário, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home"); 
    */
  };

  return (
    <C.Container>
      
      <C.Content>
      <C.Label>ACESSE SUA CONTA</C.Label>

        <Input
          type="usuário"
          placeholder="Digite seu Usuário"
          value={usuário}
          onChange={(e) => [setusuário(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;