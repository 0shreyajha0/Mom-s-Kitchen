import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { SignUp } from "../components/SignUp";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SignUpPage = () => {
  return (
    <>
      <Header />
      <SignUp />
      <Footer />
    </>
  );
};
