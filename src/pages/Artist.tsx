import { Box, SvgIcon } from "@mui/material";
import { ReactComponent as PlayIcon } from "assets/icons/play-icon-white.svg";

import { ArtistHeader } from "components/ArtistPage/ArtistHeader";

interface AppProps {
  artistInfo: ArtistInfoType;
}

export type ArtistInfoType = {
  name: string;
  listeners: number;
  verified: boolean;
  image: string;
};

export default function Artist({ artistInfo }: AppProps) {
  // const { name, image, listeners, verified } = artistInfo;
  return (
    <>
      <ArtistHeader artistInfo={artistInfo} />
      <Box sx={{ backgroundColor: "#191414", p: 2 }}>
        <Box
          p={2}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            borderRadius: "500px",
          }}
          component="span"
          display="flex"
          width={60}
          height={60}
          justifyContent="center"
          alignItems="center"
        >
          <SvgIcon component={PlayIcon} sx={{ ml: 0.5 }} viewBox="0 0 19 22" />
        </Box>
      </Box>
    </>
  );
}
