import React from "react";
import Wave from "react-wavify";
import {
  Box,
  Container,
  IconButton,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import { FOOTER_DATA, FOOTER_DATA_LIST } from "./footer.constant";
import { PiCopyrightThin } from "react-icons/pi";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Wave
        fill="#161515"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.35,
          points: 3,
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "300%",
          backgroundColor: "#161515",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", fontFamily: "cursive" }}
            >
              {" "}
              Mumma's Receipe Book{" "}
            </Typography>
            <Typography sx={{ color: "grey" }}>
              The Mumma's Receipe Book is brought to with Love.
            </Typography>
            <Box sx={{ textAlign: "center", marginBottom: 0 }}>
              <IconButton href="https://www.facebook.com">
                <FacebookIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton href="https://www.youtube.com">
                <YouTubeIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton href="https://www.instagram.com">
                <InstagramIcon style={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            {" "}
            <Container
              style={{
                padding: 4,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {FOOTER_DATA_LIST.map((item, index) => (
                <Box
                  mr={3}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    mr={8}
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      marginTop: 1,
                    }}
                  >
                    {item.list.map((childItem, index) => (
                      <Link
                        variant="body1"
                        key={index}
                        sx={{
                          cursor: "pointer",
                          fontWeight: 600,
                          color: "white",
                          fontSize: "14px",
                        }}
                        href={`/p/${childItem.href}`}
                      >
                        {childItem.name}
                      </Link>
                    ))}
                  </Box>
                </Box>
              ))}
              {/* Render About Us section */}
            </Container>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "10%",
            width: "80%",
            marginBottom: "1%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around ",
              alignItems: "center",
            }}
          >
            <PiCopyrightThin style={{ color: "grey" }} />
            <Typography variant="body2" sx={{ color: "grey" }}>
              &nbsp; 2024 Made With
            </Typography>
            <Typography variant="body2" sx={{ color: "grey" }}>
              &nbsp;By Shreya
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {FOOTER_DATA.map((item, index) => (
              <Typography
                variant="body2"
                key={index}
                mr={2}
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "grey",
                  },
                }}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.item}
                </a>
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
