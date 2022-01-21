import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-around;
  width: 95%;
  margin: 0.5rem;
  border-bottom: 1px solid var(--gray-100);
  img {
    width: 55px;
    height: 53.53px;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    background-color: var(--gray-100);
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: white;
  color: var(--gray-300);
  width: 20px;
  height: 20px;
  svg {
    width: 1.5rem;
    height: 1rem;
    margin-left: -1rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Botton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border: 1px solid var(--gray-100);
  width: 22%;
  button {
    font-weight: 700;
    font-size: 16px;
    border: none;
    width: 40px;
    padding: 0.3rem;
    color: red;
  }
  div {
    text-align: center;
    width: 60px;
  }
`;
