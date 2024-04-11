import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { IngredientsCard } from "../IngredientsCard";

export const RecipeDetails = (props) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recipeId } = props;

  useEffect(() => {
    if (recipeId !== undefined) {
      const response = fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=3f10eba91f56409d8c16d5fe42295498`
      );
      response
        .then((res) => res.json())
        .then((res) => {
          setRecipeDetails(res);
          console.log(res);
        });
    }
  }, [recipeId]);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        {recipeDetails.title}
      </Typography>
      <Box display="flex" justifyContent="center" mb={4}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="auto"
            image={recipeDetails.image}
            alt="Recipe"
          />
          <CardContent>
            <Box>
              <Typography variant="h4" align="center" gutterBottom>
                Information
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Ready in {recipeDetails.readyInMinutes} minutes
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Servings: {recipeDetails.servings}
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Aggregate Likes: {recipeDetails.aggregateLikes}
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Health Score: {recipeDetails.healthScore}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box
        display="flex"
        justifyContent="center  "
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        overflowX="auto"
      >
        <Typography variant="h4" align="center" mr={5} gutterBottom>
          Ingredients
        </Typography>
        <Box width="80vw" display="flex" justifyContent="center" mb={4}>
          <Stack direction="row" spacing={2}>
            {recipeDetails.extendedIngredients &&
              recipeDetails.extendedIngredients.map((ingredient, index) => (
                <IngredientsCard key={index} ingredient={ingredient} />
              ))}
          </Stack>
        </Box>
      </Box>
      <Typography variant="h4" align="center" gutterBottom>
        Instructions
      </Typography>
      <ol>
        {recipeDetails.analyzedInstructions &&
          recipeDetails.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
      </ol>
      <Typography variant="h4" align="center" gutterBottom>
        Additional Information
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Ready in {recipeDetails.readyInMinutes} minutes
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Servings: {recipeDetails.servings}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Aggregate Likes: {recipeDetails.aggregateLikes}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Health Score: {recipeDetails.healthScore}
      </Typography>
    </Container>
  );
};
