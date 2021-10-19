import { Box, Paper } from "@mui/material";

import { Left } from "./Left";
import { Right } from "./Right";
import { Middle } from "./Middle";
export default function BottomControls() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: {
          xs: 60,
          md: 60,
          lg: 0,
        },
        left: 0,
        right: 0,
        zIndex: 10000,
        height: 80,
        // height: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Left />
        <Middle />
        <Right />
      </Box>
    </Paper>
  );
}
