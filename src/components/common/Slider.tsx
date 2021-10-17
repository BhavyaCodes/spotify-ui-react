import * as React from "react";
import { styled } from "@mui/system";
import SliderUnstyled from "@mui/core/SliderUnstyled";

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
    background-color: #fff;
    opacity: 0;
  }
`
);

interface SliderProps {
  value?: number;
  defaultValue?: number;
}

export function Slider({ value, defaultValue }: SliderProps) {
  return <StyledSlider defaultValue={defaultValue || 10} value={value} />;
}
