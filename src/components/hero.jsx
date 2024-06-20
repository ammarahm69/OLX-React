// src/components/hero.jsx
import React from "react";
import { Grid, Typography } from "@mui/material"; // Importing necessary MUI components
import "../App.css";
import HeroImage from "../assets/download.webp";

function Hero() {
  return (
    <div className="hero">
      <Grid container>
        <Grid item xs={12} md={12}>
          <img src={HeroImage} alt="Hero" className="hero-img" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
