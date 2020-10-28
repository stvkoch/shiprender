import React, { useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

import Home from "./containers/home";
import Details from "./containers/details";
import List from "./containers/list";
import NotFound from "./containers/not-found";

const Container = styled.div`
  padding: 20px;
`;

function App() {
  useEffect(() => {
    // window.__ssrFetchForce__ = true;
  }, []);

  return (
    <Container>
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
    </Container>
  );
}

export default App;
