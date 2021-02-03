import React from "react";
import { Link } from "react-router-dom";

const List = ({ pokemons, clearText }) => {
  return (
    <>
      {pokemons && (
        <div className="container-list w-4/5 mx-auto mt-20 p-10">
          <div className="grid grid-cols-4 gap-3">
            {pokemons.map((pokemon, i) => (
              <Link to={`/about/${pokemon.idx}`} onClick={clearText}>
                <div
                  className="container-name bg-blue-200 rounded-lg p-3 text-center hover:bg-blue-400 cursor-pointer"
                  key={i}
                >
                  <h3 className="text-black-400 text-2xl capitalize">
                    {pokemon.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default List;
