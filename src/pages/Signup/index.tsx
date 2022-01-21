import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/Users";
import {
  Form,
  Container,
  RegisterButton,
  Description,
  TextFieldEdited,
  Box,
  SvgContainer,
  Logo,
  ButtonLogin,
} from "./styles";
import { BsBagCheckFill } from "react-icons/bs";
import { useHistory } from "react-router";
// import { FormHelperText } from "@mui/material";

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string().min(6, "Mínimo de 6 dígitos"),
    confirmPassword: yup.string(),
  });

  const history = useHistory();

  const { SignUp } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserData>({ resolver: yupResolver(schema) });

  const onSubmitButton = (data: RegisterUserData) => {
    console.log(data);
    SignUp(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitButton)}>
        <h1>Cadastro</h1>
        <ButtonLogin
          onClick={() => {
            history.push("/login");
          }}
        >
          <span>Retornar para o login</span>
        </ButtonLogin>
        <TextFieldEdited
          type="text"
          id="name"
          label="Nome"
          variant="outlined"
          {...register("name")}
        />
        <p> {errors.name?.message}</p>
        <TextFieldEdited
          type="text"
          id="email"
          label="Email"
          variant="outlined"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <TextFieldEdited
          type="password"
          id="password"
          label="Senha"
          variant="outlined"
          {...register("password")}
        />
        <p>{errors.email?.message}</p>
        <TextFieldEdited
          type="password"
          id="confirmPassword"
          label="Confirmação de senha"
          variant="outlined"
          {...register("confirmPassword")}
        />
        <p>{errors.email?.message}</p>
        <RegisterButton type="submit">Registrar</RegisterButton>
      </Form>
      <Description>
        <Logo>
          <h1>Burguer</h1>
          <h3>Kenzie</h3>
        </Logo>
        <Box>
          <SvgContainer>
            <BsBagCheckFill />
          </SvgContainer>
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os
            <strong> melhores</strong> ingredientes.
          </span>
        </Box>
      </Description>
    </Container>
  );
};
