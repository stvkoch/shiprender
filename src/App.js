import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Home from "./containers/home";
import Details from "./containers/details";
import List from "./containers/list";
import NotFound from "./containers/not-found";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/details">Details</NavLink>
        </li>
        <li>
          <NavLink to="/list">List</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" component={List} />
        <Route path="/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
