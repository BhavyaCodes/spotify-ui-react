import { Box, SvgIcon } from "@mui/material";
import { ReactComponent as Shuffle } from "assets/icons/shuffle.svg";
import { ReactComponent as Next } from "assets/icons/next.svg";
import { ReactComponent as Play } from "assets/icons/play.svg";
import { ReactComponent as Previous } from "assets/icons/previous.svg";
import { ReactComponent as Repeat } from "assets/icons/repeat.svg";
import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

export function Middle() {
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mr: 2 }}
    >
      <Box
        display="flex"
        fontSize={14}
        width={140}
        justifyContent="space-between"
        alignItems="center"
      >
        <SvgIcon
          onClick={() => setShuffle((s) => !s)}
          className="text"
          component={Shuffle}
          sx={{
            "& path": {
              fill: shuffle ? (theme) => theme.palette.primary.main : "inherit",
            },
            fontSize: "inherit",
          }}
          viewBox="0 0 14 11"
        />
        <SvgIcon
          component={Previous}
          sx={{
            "&:hover path": {
              fill: "#fff",
            },
            fontSize: "11px",
          }}
          viewBox="0 0 10 11"
        />
        <Box
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 500,
            width: 28,
            height: 28,
            // "&:hover": {
            //   width: 35,
            //   height: 35,
            // },
          }}
        >
          <SvgIcon
            component={Play}
            sx={{
              fontSize: "12px",
              pl: 0.25,
            }}
            viewBox="0 0 10 12"
          />
        </Box>
        <SvgIcon
          component={Next}
          sx={{
            "&:hover path": {
              fill: "#fff",
            },
            fontSize: "inherit",
          }}
          viewBox="0 0 10 11"
        />
        <SvgIcon
          onClick={() => setRepeat((s) => !s)}
          className="text"
          component={Repeat}
          sx={{
            "& path": {
              fill: repeat ? (theme) => theme.palette.primary.main : "inherit",
            },
            fontSize: "inherit",
          }}
          viewBox="0 0 14 12"
        />
      </Box>

      <ProgressBar />
    </Box>
  );
}
