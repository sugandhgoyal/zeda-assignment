import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SearchComponent from "./components/SearchComponent";
import MoviePage from "./components/MoviePage";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Slider}></Route>
        <Route exact path="/movie/:id" component={MoviePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
