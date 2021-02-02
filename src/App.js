import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import axios from "axios";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    axios.get(currentUrl).then((res) => {
      const results = res.data.results.map((p, i) => {
        return { ...p, id: i + 1 };
      });

      setPokemonList(results);
    }, []);
  });

  return (
    <Router>
      <div className="w-full flex flex-col items-center">
        <Link to="/">
          <h1 className="text-blue-400 text-4xl p-12">Pokemon Database</h1>
        </Link>
      </div>

      <Switch>
        <Route path="/about/:slug">
          <About />
        </Route>
        <Route path="/">
          <Home pokemonList={pokemonList} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
