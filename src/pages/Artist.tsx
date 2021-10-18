import { Box, Button, SvgIcon } from "@mui/material";
import { ReactComponent as PlayIcon } from "assets/icons/play-icon-white.svg";

import { ArtistHeader } from "components/ArtistPage/ArtistHeader";
import { ArtistPopularSongs } from "components/ArtistPage/ArtistPopularSongs";
import PopularReleases from "components/ArtistPage/PopularReleases";
import { PopularReleaseType } from "components/ArtistPage/PopularReleases/Title";

interface AppProps {
  artistInfo: ArtistInfoType;
  popularSongs: ArtistPopularSongType[];
  popularReleases: PopularReleaseType[];
}

export type ArtistInfoType = {
  name: string;
  listeners: number;
  verified: boolean;
  image: string;
};

export type ArtistPopularSongType = {
  title: string;
  image: string;
  hits: number;
  length: string;
};

export default function Artist({
  artistInfo,
  popularSongs,
  popularReleases,
}: AppProps) {
  // const { name, image, listeners, verified } = artistInfo;
  return (
    <>
      <ArtistHeader artistInfo={artistInfo} />
      <Box sx={{ backgroundColor: "#191414", p: 3 }}>
        <Box display="flex" alignItems="center">
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
            <SvgIcon
              component={PlayIcon}
              sx={{ ml: 0.5 }}
              viewBox="0 0 19 22"
            />
          </Box>
          <Button
            sx={{ display: "inline", px: 4, mx: 4 }}
            variant="outlined"
            color="secondary"
          >
            FOLLOW
          </Button>
        </Box>
        <ArtistPopularSongs popularSongs={popularSongs} />
        <PopularReleases releases={popularReleases} />
      </Box>
    </>
  );
}
