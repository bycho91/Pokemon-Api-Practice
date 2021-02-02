import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardContent, Grid } from "@material-ui/core";

const About = () => {
  const { slug } = useParams();

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${slug}/`).then((res) => {
      setPokemon(res.data);
    });
  }, [slug]);

  return (
    <>
      {pokemon && (
        <div className="flex justify-center mt-5">
          <Card className="w-2/6 border-3 rounded-xl shadow-3xl">
            <CardHeader
              title={pokemon.name}
              subheader={`Weight: ${pokemon.weight} lbs`}
              className="text-center text-uppercase"
            />
            <CardContent className="flex justify-center">
              <img src={pokemon.sprites.front_shiny} alt="" className="w-100" />
              <img src={pokemon.sprites.back_shiny} alt="" className="w-100" />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default About;
