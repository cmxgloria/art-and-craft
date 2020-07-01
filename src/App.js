import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.jsx";

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
        <Route path="/handmade-art" component={HandmadeArt} />
      </Switch>
    </div>
  );
}

export default App;
