import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  width: 100vw;
  min-height: 100vh;
  @media screen and (min-width: 890px) {
    flex-direction: row;
    justify-content: space-evenly;
    flex: 2;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const Logo = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 2rem;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 36px;
  }
  h3 {
    font-size: 26px;
    margin-left: 10px;
    margin-top: 11px;
    color: red;
  }
  @media screen and (min-width: 890px) {
    left: 62%;
    top: 25%;
  }
`;

export const Form = styled.form`
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 383;
  height: 461px;
  border: 1px solid var(--gray-100);
  padding: 1rem;
  position: relative;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
  }
  h1 {
    margin-left: -65%;
  }
  p {
    color: var(--negative);
  }
  @media screen and (min-width: 890px) {
    width: 500px;
    height: 461px;
  }
`;

export const ButtonLogin = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2rem;
  border: none;
  background-color: white;
  text-decoration: underline;
  color: var(--gray-300);
`;

export const TextFieldEdited = styled(TextField)`
  width: 347px;
  margin: 0.5rem;
  @media screen and (min-width: 890px) {
    width: 452px;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 21%;
  span {
    text-align: center;
    width: 250px;
    margin: 0 auto;
    margin-top: -15px;
    margin-bottom: 15px;
    font-size: 14px;
  }
  @media screen and (min-width: 890px) {
    p {
      width: 327px;
    }
  }
`;

export const RegisterButton = styled.button`
  width: 347px;
  height: 60px;
  background-color: var(--gray-100);
  border: none;
  border-radius: 5px;
  color: var(--gray-600);
  font-weight: 700;
  font-size: 16px;
  @media screen and (min-width: 890px) {
    width: 452px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Box = styled.div`
  display: none;
  @media screen and (min-width: 890px) {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    width: 377px;
    height: 95px;
    border: 1px solid var(--gray-100);
    span {
      font-size: 16px;
      padding: 0.5rem;
    }
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  height: 80%;
  width: 30%;
  background-color: #e1fae1;
  margin: 10px;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
