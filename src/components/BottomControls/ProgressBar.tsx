import * as React from "react";
import { styled, alpha, Box } from "@mui/system";
import SliderUnstyled from "@mui/core/SliderUnstyled";
import { Typography } from "@mui/material";

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  height: 4px;
  width: 100%;
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;
  &:hover {
    opacity: 1;
    color: ${theme.palette.primary.main};
    & .MuiSlider-rail {
      background-color: ${theme.palette.grey[600]};
    }
    & .MuiSlider-thumb {
      opacity: 1;
    }
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    // background-color: currentColor;
    background-color: ${theme.palette.grey[600]};
    opacity: 0.38;
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 12px;
    height: 12px;
    margin-left: -6px;
    margin-top: -4px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    // border: 2px solid currentColor;
    background-color: #fff;
    opacity: 0;

    // :hover,
    // &.Mui-focusVisible {
    //   box-shadow: 0 0 0 0.25rem ${alpha("#90caf9", 0.15)};
    // }

  }
`
);

export function ProgressBar() {
  return (
    <Box sx={{ width: 600 }} display="flex">
      <Typography sx={{ position: "relative", top: 2.5, mr: 2 }}>
        1:43
      </Typography>
      <StyledSlider defaultValue={10} />
      <Typography sx={{ position: "relative", top: 2.5, ml: 2 }}>
        4:00
      </Typography>
    </Box>
  );
}
