import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import cats from "./cats";
import Header from "./components/Header";
import CatIndex from "./pages/CatIndex";

const App = () => {
  const [allCats, setAllCats] = useState(cats);
  //allCats = this.state.cats
  //setAllCats = setState({allCats: cats})
  return (
    <>
      <Router>
        <Header />
        <p>Hey!</p>
        <Switch>
          <Route
            exact path="/"
            render={(props) => <CatIndex cats={allCats} />}
          />
        </Switch>
      </Router>
    </>
  );
};
export default App;
