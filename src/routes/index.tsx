import { Navigate, Route, Routes } from "react-router-dom";
import RegisterUserPage from "../pages/RegisterUser";
import LoginUserPage from "../pages/LoginUser";
import HomePage from "../pages/Home";

const RoutersMain = () => {
  const token: string | null = window.localStorage.getItem("authToken");

  return (
    <Routes>
      <Route path="/cadastrar" element={<RegisterUserPage />} />
      <Route path="/entrar" element={<LoginUserPage />} />
      <Route path="/notes" element={<HomePage />} />

      <Route
        path={"*"}
        element={
          token === null ? (
            <Navigate to={"/entrar"} />
          ) : (
            <Navigate to={"/notes"} />
          )
        }
      />
    </Routes>
  );
};

export default RoutersMain;
