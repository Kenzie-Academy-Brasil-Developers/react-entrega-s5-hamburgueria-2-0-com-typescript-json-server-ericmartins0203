import styled from "styled-components";

export const NavContainer = styled.div`
  height: 80px;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--gray-100);
`;

export const Logo = styled.div`
  position: absolute;
  left: 2.5rem;
  display: flex;
  justify-content: center;
  h1 {
  }
  h3 {
    margin-top: 7px;
    color: red;
  }
`;

export const Search = styled.div`
  display: none;

  @media screen and (min-width: 730px) {
    display: flex;

    input {
      margin-left: 10%;
      width: 365px;
      height: 60px;
      border-radius: 5px;
      border: none;
      text-indent: 10px;
      font-size: 16px;
    }
    button {
      margin: 4px;
      padding: 0.5rem 0.7rem;
      margin-left: -12%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-color);
      border: none;
      color: white;
      border-radius: 5px;
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export const CartModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  min-width: 375px;
  min-height: 224px;
  border-radius: 5px;
  background-color: var(--white);
  border: 1px solid var(--gray-100);
`;

export const HeaderCart = styled.div`
  background-color: var(--primary-color);
  height: 54px;
  color: white;
  position: relative;

  h3 {
    padding: 1rem;
    font-weight: 500;
  }
  button {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 332px;
    top: 15px;
    z-index: 2;
    color: white;
    border: none;
    background: none;
    :hover {
      color: var(--primary-color);
    }
    @media screen and (min-width: 730px) {
      left: 424px;
    }
  }

  svg {
    border: none;
    margin: 0 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const DescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 158px;
`;

export const NavOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  border: none;
`;

export const BtnSearch = styled.button`
  border: none;
  background: none;
  color: var(--gray-300);
  :hover {
    color: var(--primary-color);
  }
  svg {
    border: none;
    margin: 0 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  @media screen and (min-width: 730px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  top: 0;
  position: absolute;
  background-color: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    min-width: 365px;
    height: 60px;
    border-radius: 5px;
    border: none;
    text-indent: 10px;
    font-size: 16px;
  }
  button {
    margin: 4px;
    padding: 0.5rem 0.7rem;
    margin-left: -12%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-color);
    border: none;
    color: white;
    border-radius: 5px;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  @media screen and (min-width: 730px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: var(--gray-300);
  :hover {
    color: var(--primary-color);
  }
  svg {
    border: none;
    margin: 0 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ButtonClean = styled.button`
  width: 332px;
  height: 60px;
  margin: 1rem;
  border: none;
  background-color: var(--gray-100);
  color: var(--gray-300);
  font-weight: 700;
  @media screen and (min-width: 730px) {
    width: 454px;
  }
`;

export const TotalPrice = styled.div`
  .total {
    margin-left: 1.2rem;
    font-weight: 500;
  }
  span {
    font-size: 15px;
    margin-left: 62%;
  }
`;
