import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CatIndex from "./pages/CatIndex";
import NewCat from "./pages/NewCat";

const App = () => {
 
  //allCats = this.state.cats
  //setAllCats = setState({allCats: cats})
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={ () => <CatIndex  />} />
          <Route  path="/newcat" render={ () => <NewCat />} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
