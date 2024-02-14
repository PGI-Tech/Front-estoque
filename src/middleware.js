import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Função para verificar o token
const verifyToken = async () => {
    const token = localStorage.getItem('token');

    if (token) {
        try {
            const secret = process.env.REACT_APP_SECRET;
            const payload = await jwtVerify(token, secret);

            return payload.usuario;
        } catch (error) {
            return null;
        }
    }
    return null;
};

// Componente de rota protegida
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const tokenData = await verifyToken();
            setAuthenticated(!!tokenData);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
};

// Componente de rotas
const Routes = () => {
    return (
        <Router>
            <Route path="/signin" component={SignIn} />
            <ProtectedRoute path="/mkweb/modulos" component={Modulos} />
            <ProtectedRoute path="/mkweb/:path*" component={MkWeb} />
        </Router>
    );
};

export default Routes;
