import Box from "@mui/material/Box";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import React, { useEffect, useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { RecipeList } from "../components/RecipeList";
import { RequestRecipeButton } from "../components/RequestRecipeButton";
import { MOCK_DATA } from "../MockData";

export const Home = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    // const response = fetch(
    //   "https://api.spoonacular.com/recipes/random?number=12&apiKey=3f10eba91f56409d8c16d5fe42295498"
    // );
    // response
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data.recipes);
    //     setRecipeList(data.recipes);
    //   });

    //This is temporary
    setRecipeList(MOCK_DATA);
  }, []);

  return (
    <Box>
      <RequestRecipeButton />
      <Header />
      <HeroSection />
      <RecipeList recipeList={recipeList} />
      <Footer />
    </Box>
  );
};
