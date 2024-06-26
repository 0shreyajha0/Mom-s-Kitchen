import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Link,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { BsStars } from "react-icons/bs";

export const RecipeCard = (props) => {
  console.log(props);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (recipe) => {
    setLiked(!liked);
  };
  const veganString = props.vegan ? "Yes" : "No";

  return (
    <Card
      sx={{
        width: "100%",
        height: "80vh",
        p: 0,
        borderRadius: "25px",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={props.source}
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
              bottom: 25,
              left: 10,
              fontWeight: 800,
              color: "white",
            }}
          >
            {props.nameOfRecipe}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textAlign: "center",
              position: "absolute",
              bottom: 4,
              color: "white",
              left: 10,
              fontWeight: 500,
            }}
          >
            {props.category}
          </Typography>
          <Box sx={{ position: "absolute", top: 2, right: 2 }}>
            <IconButton
              onClick={handleLikeClick}
              sx={{
                margin: "auto",
                display: "block",

                bottom: 0,
                color: "white",
              }}
            >
              <FavoriteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        </Box>
        {/*  */}
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
                Ready in : {props.readyInMinutes}
              </Typography>
            </Box>
            <Box sx={{}}>
              <Box
                style={{
                  padding: "4px 15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "25px",
                  gap: 4,
                  backgroundColor: "#EEEEFF",
                }}
              >
                <BsStars style={{ color: "#5D5DEC" }} />
                <Typography
                  variant="body2"
                  sx={{ color: "#5D5DEC", fontWeight: 500 }}
                >
                  Health Score : {props.healthScore}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: 1, marginX: 1 }}>
            <Typography variant="body1" sx={{ flex: 1, color: "red" }}>
              Vegan : {veganString}
            </Typography>
            <Link href={`/recipe/${props.id}`}>View Details</Link>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "25vh",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                marginLeft: 1,
                height: "25vh",
                marginTop: 1,
                fontWeight: 900,
              }}
            >
              {props.description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
