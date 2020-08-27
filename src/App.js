import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Contact from "./pages/contact/Contact.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";
import Header from "./component/header/Header.jsx";
// import SignIn from "./component/sign-in/SignIn.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

// import "./App.css";
import { GlobalStyle } from "./global.styles";

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
    const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       this.setState({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         },
    //       });
    //     });
    //   }

    //   this.setState({ currentUser: userAuth });
    // });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/art-and-craft" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path="/handmade-art" component={HandmadeArt} />
        </Switch>
      </div>
    );
  }
}
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
