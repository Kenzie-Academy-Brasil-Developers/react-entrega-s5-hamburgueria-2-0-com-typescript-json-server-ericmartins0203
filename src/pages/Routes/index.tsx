import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "../Login";
import { Signup } from "../Signup";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};
