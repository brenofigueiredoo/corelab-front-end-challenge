import { IDataRegister, UserContext } from "../../contexts/UserContext";
import { Container } from "./style";
import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";

const RegisterUserPage = () => {
  const { onRegister } = useContext(UserContext);

  const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onRegister)}>
          <h1>Bem-vindo</h1>
          <div>
            <input type="text" placeholder="Nome" {...register("name")} />
            <p className="p_errors">{errors.name?.message}</p>
          </div>

          <div>
            <input type="text" placeholder="Email" {...register("email")} />
            <p className="p_errors">{errors.email?.message}</p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="p_errors">{errors.password?.message}</p>
          </div>

          <button className="button--register" type="submit">
            Cadastrar
          </button>
        </form>
      </Container>
    </>
  );
};
export default RegisterUserPage;
