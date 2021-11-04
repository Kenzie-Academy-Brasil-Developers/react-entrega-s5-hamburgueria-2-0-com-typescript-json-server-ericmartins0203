import {
  NavContainer,
  HeaderCart,
  Logo,
  Search,
  NavOptions,
  CartModal,
  DescriptionModal,
  SearchContainer,
  BtnSearch,
  Button,
  ButtonClean,
  TotalPrice,
} from "./styles";
import { CgSearch } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useUser } from "../../providers/Users";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router";
import { useCart } from "../../providers/Cart";
import { CardCart } from "../CardCart";

interface NavProps {
  setInputSearch: (name: string) => void;
}

export const Nav = ({ setInputSearch }: NavProps) => {
  const [isCart, setIsCart] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const history = useHistory();

  const { cart, getCart } = useCart();

  const { isLoged, Logout } = useUser();

  const HandlePage = () => {
    history.push("/login");
  };

  const HandleCart = async () => {
    getCart();
    await setIsCart(!isCart);
    console.log(cart);
  };

  const HandleModalSearch = () => {
    setIsSearch(!isSearch);
  };

  console.log(cart, "cart");
  return (
    <NavContainer>
      <Logo>
        <h1>Burguer</h1>
        <h3>Kenzie</h3>
      </Logo>
      <Search>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button onClick={() => {}}>
          <CgSearch />
        </button>
      </Search>
      <BtnSearch onClick={() => setIsSearch(!isSearch)}>
        <CgSearch />
      </BtnSearch>
      {isSearch && (
        <SearchContainer>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button onClick={() => HandleModalSearch()}>
            <CgSearch />
          </button>
        </SearchContainer>
      )}

      <NavOptions>
        <Button onClick={() => HandleCart()}>
          <FaShoppingCart />
        </Button>
        {isCart && (
          <CartModal>
            <HeaderCart>
              <h3>Carrinho de compras</h3>
              <button onClick={() => setIsCart(!isCart)}>x</button>
            </HeaderCart>
            <DescriptionModal>
              {isLoged ? (
                cart ? (
                  <TotalPrice>
                    {cart &&
                      cart.map((item, index) => (
                        <CardCart item={item} key={index} />
                      ))}
                    <h3 className="total">
                      Total:{" "}
                      <span>
                        R${" "}
                        {cart
                          .reduce(
                            (acc, element) => acc + Number(element.price),
                            0
                          )
                          .toFixed(2)
                          .replace(".", ",")}
                      </span>
                    </h3>
                    <ButtonClean>Remover todos</ButtonClean>
                  </TotalPrice>
                ) : (
                  <>
                    <h3>Sua sacola está vazia</h3>
                    <span>Adicione itens</span>
                  </>
                )
              ) : (
                <>
                  <h3>Você não está logado</h3>
                </>
              )}
            </DescriptionModal>
          </CartModal>
        )}
        {isLoged ? (
          <Button onClick={() => Logout()}>
            <FiLogOut />
          </Button>
        ) : (
          <Button onClick={() => HandlePage()}>
            <FiLogIn />
          </Button>
        )}
      </NavOptions>
    </NavContainer>
  );
};
