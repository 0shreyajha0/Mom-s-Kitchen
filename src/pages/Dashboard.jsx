import Box from "@mui/material/Box";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { RequestRecipeButton } from "../components/RequestRecipeButton";

import React from "react";

export const Dashboard = () => {
  return (
    <Box>
      <RequestRecipeButton />
      <Header />
      <HeroSection />
      <Footer />
    </Box>
  );
};
