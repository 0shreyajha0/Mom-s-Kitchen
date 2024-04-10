import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const DynamicPage = () => {
  let { pageName } = useParams();

  return (
    <Box height={"100vh"} sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: "100%",
          textTransform: "capitalize",
          backgroundColor: "#F7F7F7",
          height: "80px",
          display: "flex",
          borderBottom: "4px solid #F1F1F1",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" style={{ fontWeight: 900, paddingLeft: 30 }}>
          Header component of {pageName} Page
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" style={{}}>
          Content of {pageName} page
        </Typography>
      </Box>
    </Box>
  );
};
