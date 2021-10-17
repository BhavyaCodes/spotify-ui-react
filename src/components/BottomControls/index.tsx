import { Box, Paper } from "@mui/material";

import { Left } from "./Left";
import { Right } from "./Right";
import { Middle } from "./Middle";
export default function BottomControls() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        // height: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Left />
        <Middle />
        <Right />
      </Box>
    </Paper>
  );
}