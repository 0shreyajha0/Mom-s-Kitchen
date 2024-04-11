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
    <Box>
      <Header sx={{ position: "relative" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              width: "80%",
              marginBottom: "4%",
              fontFamily: "cursive",
              fontWeight: "bold",
            }}
          >
            Detailed Recipe Of
          </Typography>
          <Typography
            variant="h3"
            sx={{
              width: "90%",
              margin: "1%",
              fontFamily: "cursive",
            }}
          >
            {recipeDetails.title}
          </Typography>
        </Box>
        <Box
          component="img"
          src={recipeDetails.image}
          alt="image of dish"
          sx={{
            width: "50%",
            height: "35%",
            margin: "1%",
            borderRadius: "25px",
            boxShadow: "initial",
          }}
        />
        <Box></Box>
      </Box>

      <Footer />
    </Box>
  );
};
