import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";
import Header from "./component/header/Header.jsx";
// import SignIn from "./component/sign-in/SignIn.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUpPage.jsx";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

const HandmadeArt = () => (
  <div>
    <h1>HATMADE ART </h1>
  </div>
);

// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/shop" component={ShopPage} />
//         <Route path="/signin" component={SignIn} />
//         <Route path="/handmade-art" component={HandmadeArt} />
//       </Switch>
//     </div>
//   );
// }

// export default App;

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
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route path="/handmade-art" component={HandmadeArt} />
        </Switch>
      </div>
    );
  }
}

export default App;
