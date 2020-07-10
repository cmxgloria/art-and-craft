import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";
import Header from "./component/header/Header.jsx";
// import SignIn from "./component/sign-in/SignIn.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

const HandmadeArt = () => (
  <div>
    <h1>HATMADE ART </h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/handmade-art" component={HandmadeArt} />
        </Switch>
      </div>
    );
  }
}

export default App;
