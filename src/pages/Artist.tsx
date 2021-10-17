// import { Box, SvgIcon, Typography } from "@mui/material";

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
  const { name, image, listeners, verified } = artistInfo;
  return <ArtistHeader artistInfo={artistInfo} />;
}
