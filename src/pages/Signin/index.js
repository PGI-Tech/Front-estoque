import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import cookie from 'cookie';


const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [usuario, setusuário] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!usuario || !senha) { // verifica se os campos não estão vazios
      setError("Preencha todos os campos")
    } 
    else {
      const json = JSON.stringify({
        username: usuario, 
        senha: senha
      });

      console.log(json);
      
      try { // ROUTE: Autenticação
        const response = await fetch(process.env.REACT_APP_API_URL+'/auth', { // routeApi é a rota padrão da API 
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
            body: json
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
  };

  return (
    <C.Container>
      
      <C.Content>
      <C.Label>ACESSE SUA CONTA</C.Label>

        <Input
          type="usuário"
          placeholder="Digite seu Usuário"
          value={usuario}
          onChange={(e) => [setusuário(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} /><C.LabelSignup>
          <a href={process.env.REACT_APP_API_URL}>Autorizar</a>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;