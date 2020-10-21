import React from 'react';
import Home from './components/screens/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Category from "./components/screens/Category";
import Single from "./components/screens/Single";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/category">
        <Category />
      </Route>
      <Route path="/single">
        <Single />
      </Route>
    </BrowserRouter>
  );
}

export default App;
