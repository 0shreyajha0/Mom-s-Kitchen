import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Login } from "../components/Login";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipePage = () => {
  let { recipeId } = useParams();

  return (
    <>
      <Header />
      <RecipeDetails />
      <Footer />
    </>
  );
};
