import React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { BsStars } from "react-icons/bs";
import image from "../../Assets/Images/JammuRajmaRice.jpeg";

export const IngredientsCard = (props) => {
  return (
    <Card
      sx={{
        width: "10vw",
        height: "30vh",
        p: 0,
        borderRadius: "25px",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`}
            alt="image of dish"
            sx={{
              width: "100%",
              height: "60%",
              margin: "auto",
              borderRadius: "25px",
            }}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              position: "absolute",
              bottom: 15,
              left: 10,
              fontWeight: 800,
              color: "white",
            }}
          >
            {props.name}
          </Typography>
        </Box>
        <Box sx={{ p: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 1,
              }}
            >
              <StarIcon sx={{ color: "gold" }} />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginLeft: 1 }}
              >
                Amount: {props.amount} {props.unit}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: 1, marginX: 1 }}>
              <Typography variant="body1" sx={{ flex: 1, color: "red" }}>
                {props.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
