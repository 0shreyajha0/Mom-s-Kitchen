import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Box, Conatiner, Typography, Table } from "@mui/material";

export const RecipeDetails = () => {
  return (
    <>
      <Header />
      <Box>
        <Typography>Recipe Details</Typography>
        <Box
          component="img"
          src="../../Assets/Images/JammuRajmaRice.jpeg"
          alt="image of dish"
          sx={{
            width: "100%",
            height: 300,
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
