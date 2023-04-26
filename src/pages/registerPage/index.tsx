import { useContext } from "react";
import { StyledError, StyledForm } from "../../components/styledForm"
import { StyledContainerRegister } from "./style"
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import { iUserRequest } from "../../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema";
import { StyledButton } from "../../components/styledButton";
import { Link } from "react-router-dom";


export const RegisterPage = () => {

    const { userRegister } = useContext(UserContext)
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iUserRequest>({
        resolver: yupResolver(registerSchema),
        mode: "onChange"
    });
    return (
        <StyledContainerRegister>
            <StyledForm onSubmit={handleSubmit(userRegister)}>
                <Link className="voltar" to="/">
                    <button className="btnVoltar" type="button">
                        voltar
                    </button>
                </Link>
                <h1>Cadastrar</h1>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" {...register("email")} />
                {errors.email && <StyledError>{errors.email.message}</StyledError>}
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" {...register("name")} />
                {errors.name && <StyledError>{errors.name.message}</StyledError>}
                <label htmlFor="password">Senha</label>
                <input id="password" type="text" {...register("password")} />
                {errors.password && <StyledError>{errors.password.message}</StyledError>}
                <label htmlFor="phone">Telefone</label>
                <input id="phone" type="text" {...register("phone")} />
                {errors.phone && <StyledError>{errors.phone.message}</StyledError>}
                <StyledButton type="submit">
                    {"Cadastrar"}
                </StyledButton>

            </StyledForm>
        </StyledContainerRegister>
    )
}