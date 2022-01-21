import { Product } from "../../types/product";
import { Nav } from "../../components/Nav";
import { useCart } from "../../providers/Cart";
import { useProducts } from "../../providers/Products";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { Container } from "./styles";

interface CartProviderData {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart?: (id: number) => void;
}

export const Home = () => {
  const { products, getProducts } = useProducts();
  const { addToCart }: CartProviderData = useCart();
  const [inputSearch, setInputSearch] = useState<string>("");

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Nav setInputSearch={setInputSearch} />
      <Container>
        {inputSearch.length !== 0
          ? products
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(inputSearch) ||
                  item.category.toLowerCase().includes(inputSearch)
              )
              .map((item, index) => (
                <Card key={index} item={item} btnAction={addToCart} />
              ))
          : products &&
            products.map((item, index) => (
              <Card key={index} item={item} btnAction={addToCart} />
            ))}
      </Container>
    </>
  );
};
