import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../../types/product";
import api from "../../services/api";

interface ProductsProps {
  children: ReactNode;
}

interface ProductsProviderData {
  products: Product[];
  getProducts: () => void;
}

const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);
  //   const [error, setError] = useState<string>("");

  const getProducts = () => {
    api
      .get<Product[]>("/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
