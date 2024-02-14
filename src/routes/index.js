import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Classe from "../pages/Cadastros/Classe";
import CadastroClasse from "../pages/Cadastros/Classe/cadastro";
import Categoria from "../pages/Cadastros/Categoria";
import CadastroCategoria from "../pages/Cadastros/Categoria/cadastro";
import MaquinaAgulha from "../pages/Cadastros/MaquinaAgulha";
import CadastroMaquinaAgulha from "../pages/Cadastros/MaquinaAgulha/cadastro";
import EspecieAgulha from "../pages/Cadastros/EspecieAgulha";
import CadastroEspecieAgulha from "../pages/Cadastros/EspecieAgulha/cadastro";

const PrivateRoute = ({ element: Element }) => {
  const { signed } = useAuth();

  return signed ? <Element /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute
              element={<Signin />}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastros/classe" element={<Classe />} />
        <Route path="/cadastros/classe/cadastro" element={<CadastroClasse />} />
        <Route path="/cadastros/categoria" element={<Categoria />} />
        <Route path="/cadastros/categoria/cadastro" element={<CadastroCategoria />} />
        <Route path="/cadastros/maquinaAgulha" element={<MaquinaAgulha />} />
        <Route path="/cadastros/maquinaAgulha/cadastro" element={<CadastroMaquinaAgulha />} />
        <Route path="/cadastros/especieAgulha" element={<EspecieAgulha />} />
        <Route path="/cadastros/especieAgulha/cadastro" element={<CadastroEspecieAgulha />} />
        {/* Add a catch-all route for unknown paths */}
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
