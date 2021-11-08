import { Product } from "../../types/product";
import { AiTwotoneDelete } from "react-icons/ai";
import { useCart } from "../../providers/Cart";
import { Container, Top, RightSide, DeleteButton } from "./styles";
import { useEffect } from "react";

interface CardCartProps {
  item: Product;
}

export const CardCart = ({ item }: CardCartProps) => {
  const { cart, removeFromCart } = useCart();

  useEffect(() => {}, [cart]);

  return (
    <Container>
      <img src={item.img} alt="item.name" height="110%" />
      <RightSide>
        <Top>
          <h3>{item.name}</h3>
          <DeleteButton onClick={() => removeFromCart(item.id)}>
            <AiTwotoneDelete />
          </DeleteButton>
        </Top>
        {/* <Botton>
          <button onClick={() => removeFromCart(item.id)}>-</button>
          <div>
            {cart.filter((element) => element.name === item.name).length}
          </div>
          <button onClick={() => addToCart(item)}>+</button>
        </Botton> */}
      </RightSide>
    </Container>
  );
};
