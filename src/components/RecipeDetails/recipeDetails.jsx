import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Box, Conatiner, Typography, Table } from "@mui/material";

export const RecipeDetails = (props) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recipeId } = props;

  useEffect(() => {
    if (recipeId !== undefined) {
      const response = fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=b2534e0eb9fd4be0839c2fe9a5047ecc`
      );
      response
        .then((res) => res.json())
        .then((res) => {
          setRecipeDetails(res);
          console.log(res);
        });
      console.log();
    }
  }, [recipeId]);

  return (
    <>
      <Header />
      <Box>
        <Typography variant="h3">
          Recipe Details of {recipeDetails.title}
        </Typography>
        <Box
          component="img"
          src={recipeDetails.image}
          alt="image of dish"
          sx={{
            width: "50%",
            height: "30%",
            margin: "auto",
            borderRadius: "25px",
          }}
        />
        <Box></Box>
      </Box>

      <Footer />
    </>
  );
};
