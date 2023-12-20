import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.usuário === JSON.parse(userToken).usuário
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (usuário, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.usuário === usuário);

    if (hasUser?.length) {
      if (hasUser[0].usuário === usuário && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ usuário, token }));
        setUser({ usuário, password });
        return;
      } else {
        return "Usuário ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (usuário, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.usuário === usuário);

    if (hasUser?.length) {
      return "Já tem uma conta com esse Usuário";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { usuário, password }];
    } else {
      newUser = [{ usuário, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
