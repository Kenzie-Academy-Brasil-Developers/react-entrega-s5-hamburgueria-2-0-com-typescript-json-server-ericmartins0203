import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { UserProvider } from "./Users";
import { ProductsProvider } from "./Products";

interface UserProps {
  children: ReactNode;
}

export const Provider = ({ children }: UserProps) => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};
