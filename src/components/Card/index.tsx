import { Product } from "../../types/product";
import { CardContainer, ImageContainer, DescriptionContainer } from "./styles";

interface CardProps {
  item: Product;
  btnAction: (data: Product) => void;
}

export const Card = ({ item, btnAction }: CardProps) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={item.img} alt="item.name" height="110%" />
      </ImageContainer>
      <DescriptionContainer>
        <h3>{item.name}</h3>
        <span>{item.category}</span>
        <p className="price">R$ {item.price.toFixed(2).replace(".", ",")}</p>
        <button onClick={() => btnAction(item)}>Adicionar</button>
      </DescriptionContainer>
    </CardContainer>
  );
};
