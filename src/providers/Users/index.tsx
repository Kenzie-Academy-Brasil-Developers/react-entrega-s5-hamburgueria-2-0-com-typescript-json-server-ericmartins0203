import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const UserContext = createContext<UserProviderData>({} as UserProviderData);

interface UserProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UserProviderData {
  isLoged: boolean;
  SignUp: (userData: RegisterUserData) => void;
  SignIn: (userData: UserData) => void;
  Logout: () => void;
  UserToken: string;
  id: number;
}

export const UserProvider = ({ children }: UserProps) => {
  const history = useHistory();
  const [isLoged, setIsLoged] = useState(false);
  const [UserToken, setUserToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const [id, setId] = useState<number>(0);

  const SignIn = (userData: UserData) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setId(response.data.user.id);
        setUserToken(response.data.accessToken);
        setIsLoged(true);
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.clear();
    setUserToken("");
    setIsLoged(false);
    console.log(isLoged);
    history.push("/");
  };

  const SignUp = (userData: RegisterUserData) => {
    api.post("register", userData).catch((err) => {
      console.log(err);
      history.push("/register");
    });
  };

  return (
    <UserContext.Provider
      value={{ UserToken, Logout, SignIn, SignUp, isLoged, id }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
