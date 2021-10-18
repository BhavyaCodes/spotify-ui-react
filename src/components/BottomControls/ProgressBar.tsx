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
          lg: "600px",
        },
      }}
      display="flex"
    >
      <Typography
        sx={{ position: "relative", top: 5, mr: 2, opacity: 0.5 }}
        fontSize={14}
      >
        1:43
      </Typography>
      <Slider />
      <Typography
        sx={{ position: "relative", top: 5, ml: 2, opacity: 0.5 }}
        fontSize={14}
      >
        4:00
      </Typography>
    </Box>
  );
}
