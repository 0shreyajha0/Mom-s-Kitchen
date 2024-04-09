import Box from "@mui/material/Box";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const response = fetch(
      "https://api.spoonacular.com/recipes/random?number=10&apiKey=3f10eba91f56409d8c16d5fe42295498"
    );
    response
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []); // study about dependency array of use effect

  return (
    <Box>
      <Header />
      <HeroSection />
      <Footer />
    </Box>
  );
};
