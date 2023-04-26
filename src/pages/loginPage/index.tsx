import { Link } from "react-router-dom";
import { StyledError, StyledForm } from "../../components/styledForm";
import { useForm } from "react-hook-form";
import { iUserLogin } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { StyledButton } from "../../components/styledButton";
import { StyledContainer } from "./style";

const LoginPage = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(userLogin)}>
        <h1 className="title">Login</h1>

        <label htmlFor="email">Email</label>
        <input id="email" type="text" {...register("email")} />
        {errors.email && <StyledError>{errors.email.message}</StyledError>}

        <label htmlFor="password">Senha</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && (
          <StyledError>{errors.password.message}</StyledError>
        )}
        <StyledButton disabled={!isValid} type="submit">
          Entrar
        </StyledButton>
        <p className="semConta">Ainda não possui uma conta ?</p>
        <Link to="/register">
          <StyledButton disabled={isValid} type="button">
            Cadastre-se
          </StyledButton>
        </Link>
      </StyledForm>
    </StyledContainer>
  );
};

export default LoginPage;
