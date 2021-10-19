import { Box } from "@mui/system";

import { Typography } from "@mui/material";
import { Slider } from "components/common/Slider";

export function ProgressBar() {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "120%",
          md: "150%",
          lg: "559px",
        },
      }}
      display="flex"
      alignItems="center"
    >
      <Typography
        sx={{
          position: "relative",
          top: 2,
          mr: 1,
          color: (theme) => theme.palette.text.secondary,
        }}
        fontSize={10}
        lineHeight="12px"
      >
        1:43
      </Typography>
      <Slider />
      <Typography
        sx={{
          position: "relative",
          top: 2,
          ml: 1,
          color: (theme) => theme.palette.text.secondary,
        }}
        fontSize={10}
        lineHeight="12px"
      >
        4:00
      </Typography>
    </Box>
  );
}
