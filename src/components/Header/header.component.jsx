import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { WavyContainer } from "../WavyContainer";

export const Header = () => {
  let navigate = useNavigate();
  const handleClickOnDashBoard = () => navigate("/dashboard");
  return (
    <Box sx={{ position: "relative" }}>
      <WavyContainer />
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: "95%",
          marginTop: "3%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "cursive", fontWeight: "bold" }}
        >
          {" "}
          Mumma's Receipe Book{" "}
        </Typography>
        <Box
          sx={{
            width: "40%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="button" onClick={handleClickOnDashBoard}>
            DashBoard
          </Button>
          <Button variant="text">Favourites</Button>
          <Button variant="text">Help</Button>
          <Button variant="text">Contact Us</Button>
        </Box>
        <Avatar>U</Avatar>
      </Box>
    </Box>
  );
};
