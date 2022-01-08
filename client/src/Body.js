import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
// import ForgotPassword from "./pages/forgotPassword";
// import ResetPassword from "./pages/resetPassword";
import NotFound from "./components/NotFound";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <section>
      <Switch>
        <Route exact path="/" component={auth.token ? Home : Login} />

        <Route
          path="/register"
          component={isLogged ? NotFound : Register}
          exact
        />

        {/* <Route
          path="/forgot_password"
          component={isLogged ? NotFound : ForgotPassword}
          exact
        />
        <Route
          path="/reset/:token"
          component={isLogged ? NotFound : ResetPassword}
          exact
        /> */}
      </Switch>
    </section>
  );
}

export default Body;
