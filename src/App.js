import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";

import "./App.css";

const HandmadeArt = () => (
  <div>
    <h1>HATMADE ART </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/handmade-art" component={HandmadeArt} />
      </Switch>
    </div>
  );
}

export default App;
