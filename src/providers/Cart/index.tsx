import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../../types/product";
import { useUser } from "../../providers/Users";
import api from "../../services/api";
import { toast } from "react-toastify";

interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  getCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const { UserToken, id } = useUser();
  const [cart, setCart] = useState<Product[]>([] as Product[]);

  const getCart = () => {
    api
      .get<Product[]>(`/cart?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (product: Product) => {
    api
      .post<Product[]>("/cart", product, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then(() => {
        getCart();
        toast.success("Produto adicionado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const removeFromCart = (id: number) => {
    api
      .delete<number>(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${UserToken}`,
        },
      })
      .then(() => {
        getCart();
        toast.success("Produto removido com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Produto não foi removido!");
      });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        getCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
