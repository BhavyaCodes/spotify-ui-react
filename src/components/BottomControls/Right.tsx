import { Box, SvgIcon } from "@mui/material";
import { ReactComponent as Computer } from "assets/icons/computer.svg";
import { ReactComponent as Enlarge } from "assets/icons/enlarge.svg";
import { ReactComponent as Queue } from "assets/icons/queue.svg";
import { ReactComponent as Volume } from "assets/icons/volume.svg";
import { Slider } from "components/common/Slider";

export function Right() {
  return (
    <Box
      p={0}
      alignItems="center"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <SvgIcon
        component={Queue}
        viewBox="0 0 16 16"
        sx={{
          fontSize: 16,
          "&:hover path": {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      />
      <SvgIcon
        component={Computer}
        viewBox="0 0 12 11"
        sx={{
          mx: 1,
          fontSize: 16,
          "&:hover path": {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      />
      <SvgIcon
        component={Volume}
        viewBox="0 0 12 11"
        sx={{
          fontSize: 16,
          "&:hover path": {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      />
      <Box width={72} mr={9.75 / 8} ml={1}>
        <Slider />
      </Box>
      <SvgIcon
        component={Enlarge}
        viewBox="0 0 11 11"
        sx={{
          mr: 1.5,
          fontSize: 10,
          "&:hover path": {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
}
