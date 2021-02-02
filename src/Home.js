import React from "react";
import { Card, CardHeader, CardContent, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = ({ pokemonList }) => {
  return (
    <Grid container spacing={3}>
      {pokemonList.map((p, i) => (
        <Grid item xs={3} align="center">
          <Link to={`/about/${p.id}`}>{p.name}</Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
