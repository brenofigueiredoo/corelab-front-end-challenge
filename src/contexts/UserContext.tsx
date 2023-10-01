import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IContextProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDataRegister {
  name: string;
  email: string;
  password: string;
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface IUserContext {
  onRegister: (data: IDataRegister) => void;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  onSubmit: (data: IDataLogin) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IContextProviderProps) => {
  const [user, setUser] = useState<IUser>();

  const navigate = useNavigate();

  const onRegister = (data: IDataRegister) => {
    api
      .post("/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Usuário cadastrado com sucesso!");
        navigate("/entrar", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Erro ao tentar registrar um usuário.");
      });
  };

  const onSubmit = (data: IDataLogin) => {
    api
      .post("/login", data)
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        toast.success("Logado com sucesso!");
        navigate("/notes", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Erro ao tentar iniciar sessão.");
      });
  };

  return (
    <UserContext.Provider
      value={{
        onRegister,
        user,
        setUser,
        onSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
