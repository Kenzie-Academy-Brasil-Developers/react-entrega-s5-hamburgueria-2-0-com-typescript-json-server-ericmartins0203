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
  setCart: (data: Product[]) => void;
  getCart: () => void;
  addToCart: (product: Product) => void;
  oneLessItem: (product: Product) => void;
  removeFromCart: (id: number) => void;
  cleanCart: () => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  toast.configure();

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
    console.log(product);
    let newProduct = {
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
      id: cart.length + 1,
      quantity: 1,
    };

    const findProduct = cart.find((item) => item.name === product.name);
    console.log(findProduct);

    findProduct
      ? api
          .patch(
            `cart/${findProduct.id}`,
            { quantity: findProduct.quantity + 1 },
            {
              headers: {
                Authorization: `Bearer ${UserToken}`,
              },
            }
          )
          .then(() =>
            toast.success(`Mais um ${findProduct.name} adicionado ao carrinho.`)
          )
      : api
          .post<Product[]>("/cart", newProduct, {
            headers: {
              Authorization: `Bearer ${UserToken}`,
            },
          })
          .then(() => {
            getCart();
            toast.success(`${newProduct.name} adicionado com sucesso!`);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Produto não foi adicionado!");
          });
  };

  const oneLessItem = (product: Product) => {
    const findProduct = cart.find((item) => item.name === product.name);

    findProduct && findProduct.quantity >= 2
      ? api
          .patch(
            `cart/${findProduct.id}`,
            { quantity: findProduct.quantity - 1 },
            {
              headers: {
                Authorization: `Bearer ${UserToken}`,
              },
            }
          )
          .then(() =>
            toast.success(`Um ${findProduct.name} foi removido do carrinho.`)
          )
      : api
          .delete(`/cart/${product.id}`, {
            headers: {
              Authorization: `Bearer ${UserToken}`,
            },
          })
          .then(() => {
            getCart();
            toast.success(`${product.name} foi removido do carrinho.`);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Produto não foi removido!");
          });
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

  const cleanCart = () => {
    cart.map((element) =>
      api
        .delete<number>(`/cart/${element.id}`, {
          headers: {
            Authorization: `Bearer ${UserToken}`,
          },
        })
        .then(() => {})
        .catch((err) => {
          console.log(err);
          toast.error("Produto não foi removido!");
        })
    );
    toast.error("Carrinho limpo!");
    getCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        getCart,
        addToCart,
        oneLessItem,
        removeFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
