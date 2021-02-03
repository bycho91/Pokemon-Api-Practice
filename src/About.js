import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const About = () => {
  const { slug } = useParams();

  const [pokemonData, setPokemonData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${slug}`)
      .then((res) => {
        setPokemonData(res.data);
        console.log(res.data);
      })
      .catch((err) => setError(true));
  }, [slug]);

  return (
    <>
      {error ? (
        <div className="w-full text-center absolute top-2/4 -translate-y-2/4">
          <h1 className="text-red-600 text-4xl">NO DATA FOUND</h1>
        </div>
      ) : (
        pokemonData && (
          <div
            className="container-card mx-auto p-3 mt-56 w-96 bg-yellow-100 rounded-lg relative"
            style={{ height: "550px", border: "18px solid #D2A607" }}
          >
            {/* TOP HEADER */}
            <div className="header flex justify-between">
              <h1 className="text-black-400 text-2xl capitalize font-bold">
                {pokemonData.name}
              </h1>

              <h1 className="text-red-500 text-2xl font-bold">
                {pokemonData.stats[0].base_stat} HP
              </h1>
            </div>
            {/* IMAGE */}
            <div className="img border-8 rounded-xl border-yellow-400 shadow-2xl text-center w-11/12 h-3/6 mx-auto flex place-self-center mt-5">
              <img
                className="w-full h-auto"
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            </div>

            {/* POKEMON INFO */}
            <div className="w-full h-auto bg-yellow-400 mx-auto mt-10 text-center rounded">
              <p className="text-sm">{`Pokemon Length: ${pokemonData.height} inches, Weight: ${pokemonData.weight} lbs.`}</p>
            </div>
            <div className="w-full mx-auto mt-3">
              <h4>{`Number of Moves: ${pokemonData.moves.length}`}</h4>
              <h4>{`Base Exp: ${pokemonData.base_experience}`}</h4>
            </div>
            {/* ID */}
            <div className="w-auto h-auto absolute bottom-1 right-1 p-1 border-2 border-black rounded-full">{`#${pokemonData.id}`}</div>
          </div>
        )
      )}
    </>
  );
};

export default About;
