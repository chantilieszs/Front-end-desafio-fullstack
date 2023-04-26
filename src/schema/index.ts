import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup.string().required("O nome é obrigatório").default(""),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(8, "A senha precisa ter no minimo 8 caracteres")
        .default(""),
});

export const registerSchema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required("A senha é obrigatória"),
    phone: yup.string().required("O telefone é obrigatório")
});