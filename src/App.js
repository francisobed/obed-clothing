import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./Pages/Homepage/Homepage";

const HatsPage = () => (
  <div>
    <h1>Hats Page i belong to Hats alone</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
