import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { RecipeCard } from "../RecipeCard";
import { FaStar } from "react-icons/fa";

export const RecipeList = (props) => {
  console.log(props);

  const addToFavouritesHandler = (id) => {
    console.log("addToFavorites : ", id);
  };
  return (
    <Box sx={{ width: "100%", marginY: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          paddingX: 2,
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Mom's verified Recipes
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflowX: "auto",
          alignItems: "center",
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <Box
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            FlexDirection: "row",
            paddingY: 2,
            gap: "18",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.recipeList.map((recipe, index) => (
            <Box sx={{ width: "30%", padding: "1%" }} key={index}>
              <RecipeCard
                source={recipe.image}
                nameOfRecipe={recipe.title}
                category={recipe.vegetarian}
                description={recipe.summary}
                vegan={recipe.vegan}
                id={recipe.id}
                healthScore={recipe.healthScore}
                readyInminutes={recipe.readyInminutes}
                handelAddToFavourites={addToFavouritesHandler}
                sx={{ height: "10%" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
