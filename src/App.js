import React, { useState, useEffect } from "react";
import About from "./About";
import List from "./List";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1500").then((res) => {
      const results = res.data.results.map((pokemon, i) => {
        return { name: pokemon.name, url: pokemon.url, idx: i + 1 };
      });

      const filteredResults = results.filter((result) =>
        result.name.includes(text)
      );

      setPokemons(filteredResults);
    });
  }, [text]);

  const clearText = () => {
    setText("");
  };

  return (
    <Router>
      <div className="bg-yellow-400 w-full">
        <header className="w-full max-w-screen-lg  mx-auto bg-yellow-400 h-32 flex items-center justify-between px-10">
          <Link to="/" onClick={clearText}>
            <h1 className="text-blue-700 text-4xl font-bold">
              Pokemon <span className="text-red-700">API</span> Finder
            </h1>
          </Link>
          <div className="search-bar">
            <SearchIcon className="mr-1 cursor-pointer" />
            <input
              type="text"
              placeholder="Search Pokemon"
              className="p-3 rounded-xl outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </header>
      </div>

      <Switch>
        <Route path="/about/:slug">
          <About />
        </Route>

        <Route path="/">
          <List pokemons={pokemons} clearText={clearText} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
