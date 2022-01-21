import { Product } from "../../types/product";
import { AiTwotoneDelete } from "react-icons/ai";
import { useCart } from "../../providers/Cart";
import { Container, Top, RightSide, DeleteButton, Botton } from "./styles";
import { useEffect } from "react";
import { useUser } from "../../providers/Users";
import api from "../../services/api";

interface CardCartProps {
  item: Product;
}

export const CardCart = ({ item }: CardCartProps) => {
  const { cart, setCart, removeFromCart, addToCart, oneLessItem } = useCart();

  const { UserToken } = useUser();

  useEffect(() => {
    api
      .get("/cart", {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [cart]);

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
        <Botton>
          <button onClick={() => oneLessItem(item)}>-</button>
          <div>{item.quantity}</div>
          <button onClick={() => addToCart(item)}>+</button>
        </Botton>
      </RightSide>
    </Container>
  );
};
