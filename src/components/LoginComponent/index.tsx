import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../providers/Users";
import {
  RegisterContainer,
  Form,
  Container,
  LoginButton,
  RegisterButton,
  Description,
  TextFieldEdited,
  Box,
  SvgContainer,
  Logo,
} from "./styles";
import { BsBagCheckFill } from "react-icons/bs";
import { useHistory } from "react-router";

interface UserData {
  email: string;
  password: string;
}

export const LoginComponent = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!").email("Email inválido"),
    password: yup.string().min(6, "Mínimo de 6 dígitos"),
  });

  const { SignIn } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    console.log(data);
    SignIn(data);
  };

  return (
    <Container>
      <Form onClick={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <form>
          <TextFieldEdited
            type="text"
            id="email"
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          {errors.email?.message}
          <TextFieldEdited
            type="password"
            id="password"
            label="Senha"
            variant="outlined"
            {...register("password")}
          />
          {errors.email?.message}
          <LoginButton type="submit" onClick={() => history.push("/")}>
            Logar
          </LoginButton>
        </form>
        <RegisterContainer>
          <span>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </span>
          <RegisterButton onClick={() => history.push("/signup")}>
            Registrar
          </RegisterButton>
        </RegisterContainer>
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
