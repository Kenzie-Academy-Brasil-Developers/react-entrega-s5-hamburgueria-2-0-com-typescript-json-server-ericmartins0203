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
  CartNumber,
  FaShoppingPosition,
} from "./styles";
import { CgSearch } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useUser } from "../../providers/Users";
import { FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router";
import { useCart } from "../../providers/Cart";
import { CardCart } from "../CardCart";
import api from "../../services/api";
import { toast } from "react-toastify";

interface NavProps {
  setInputSearch: (name: string) => void;
}

export const Nav = ({ setInputSearch }: NavProps) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isCart, setIsCart] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const history = useHistory();

  const { cart, getCart, setCart, cleanCart } = useCart();

  const { isLoged, Logout, UserToken } = useUser();

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
    SearchClickHandler();
  };

  const SearchClickHandler = () => {
    if (showSearch === false) {
      toast.info(`Clique no botão de pesquisa novamente para voltar ao menu.`);
      setShowSearch(true);
      setInputSearch(search);
    } else {
      setShowSearch(false);
      setInputSearch("");
    }
  };

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
    <NavContainer>
      <Logo>
        <h1>Burguer</h1>
        <h3>Kenzie</h3>
      </Logo>
      <Search>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            SearchClickHandler();
          }}
        >
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
          <FaShoppingPosition>
            <FaShoppingCart />
          </FaShoppingPosition>
          <CartNumber>{cart.length}</CartNumber>
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
                            (acc, element) =>
                              acc +
                              Number(element.price) * Number(element.quantity),
                            0
                          )
                          .toFixed(2)
                          .replace(".", ",")}
                      </span>
                    </h3>
                    <ButtonClean
                      onClick={() => {
                        cleanCart();
                      }}
                    >
                      Remover todos
                    </ButtonClean>
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
