import { IDataLogin, UserContext } from "../../contexts/UserContext";
import { Container } from "./style";
import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../components/Header";
import { BiUser } from "react-icons/bi";

const LoginUserPage = () => {
  const { onSubmit } = useContext(UserContext);

  const schema = yup.object({
    email: yup.string().email().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BiUser size="8rem" color="#020024" />
          {/* <img src="/note-image.png" alt="note" /> */}
          {/* <h1>Entrar</h1> */}
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

          <button className="button--login" type="submit">
            Entrar
          </button>
        </form>
      </Container>
    </>
  );
};
export default LoginUserPage;
