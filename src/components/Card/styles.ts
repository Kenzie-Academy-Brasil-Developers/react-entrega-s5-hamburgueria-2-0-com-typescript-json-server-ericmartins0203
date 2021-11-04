import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 0.5rem;
  width: 300px;
  height: 346px;
  border-radius: 8px;
  border: 2px solid var(--gray-100);

  :hover {
    border: 2px solid var(--primary-color);
    button {
      background-color: var(--primary-color);
    }
  }
  .price {
    color: var(--primary-color);
  }
  button {
    padding: 0.5rem;
    width: 106px;
    background-color: var(--gray-300);
    border: none;
    border-radius: 5px;
    color: var(--gray-0);
    font-weight: 700;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: var(--gray-0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DescriptionContainer = styled.div`
  width: 92%;
  height: 60%;
  padding: 8%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-evenly;
  span {
    color: var(--gray-300);
    font-size: 12px;
  }
  p {
    font-weight: 700;
  }
`;
