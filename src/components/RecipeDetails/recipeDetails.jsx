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
import { WavyContainer } from "../WavyContainer";
import { Footer } from "../Footer";
import { MOCK_DATA_2 } from "../../MockData2";

export const RecipeDetails = (props) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const { recipeId } = props;

  useEffect(() => {
    if (recipeId !== undefined) {
      const response = fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=420dacd647ee45319a803d9f1801a82e`
      );
      response
        .then((res) => res.json())
        .then((res) => {
          setRecipeDetails(res);
          console.log(res);
        });

      // This is temporary
      //setRecipeDetails(MOCK_DATA_2);
    }
  }, [recipeId]);

  const veganString = props.vegan ? "Yes" : "No";
  const vegetarianString = props.vegetarian ? "Yes" : "No";
  const glutenFreeString = props.glutenFree ? "Yes" : "No";
  const sustainableString = props.sustainable ? "Yes" : "No";

  return (
    <Box sx={{ position: "relative" }}>
      <WavyContainer />
      <Container maxWidth="md">
        <Box
          sx={{
            position: "absolute",
            top: "3%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            width: "95%",
            marginTop: "3%",
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
            }}
          >
            Detailed Recipe <br /> of
          </Typography>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
            }}
          >
            {recipeDetails.title}
          </Typography>
        </Box>
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
                <Typography variant="body1" align="center" gutterBottom>
                  Weight Watcher Smart Points:{" "}
                  {recipeDetails.weightWatcherSmartPoints}
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
          Vegan : {veganString}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Vegetarian: {vegetarianString}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Gluten Free: {glutenFreeString}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Sustainable: {sustainableString}
        </Typography>
      </Container>
      <Footer />
    </Box>
  );
};
