import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
