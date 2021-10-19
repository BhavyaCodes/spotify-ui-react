import { Box, Typography } from "@mui/material";
import beyonce from "assets/artists/beyonce.png";
import cardi from "assets/artists/cardi.png";
import charliePuth from "assets/artists/charlie-puth.png";
import dianaRoss from "assets/artists/diana-ross.png";
import marvinGaye from "assets/artists/marvin-gaye.png";
import usher from "assets/artists/usher.png";
import Artists from "components/Artists";
import Genres from "components/Genres";
import { GenreType } from "components/Genres/Genre";

//genres
import alternative from "assets/genres/alternative.png";
import electronic from "assets/genres/electronic.png";
import hiphop from "assets/genres/hiphop.png";

import lounge from "assets/genres/lounge.png";
import blues from "assets/genres/blues.png";
import funk from "assets/genres/funk.png";
import retro from "assets/genres/retro.png";
import latin from "assets/genres/latin.png";
import jazz from "assets/genres/jazz.png";
import ambient from "assets/genres/ambient.png";
import cinematic from "assets/genres/cinematic.png";
import fantasy from "assets/genres/fantasy.png";
import pop from "assets/genres/pop.png";
import world from "assets/genres/world.png";
import folk from "assets/genres/folk.png";

const allGenres: GenreType[] = [
  { name: "lounge", bgColor: "#AF2896", image: lounge },
  { name: "blues", bgColor: "#1D3164", image: blues },
  { name: "funk", bgColor: "#27856A", image: funk },
  { name: "retro", bgColor: "#B2B2B2", image: retro },
  { name: "latin", bgColor: "#477D95", image: latin },
  { name: "jazz", bgColor: "#E13300", image: jazz },
  { name: "ambient", bgColor: "#BA5D07", image: ambient },
  { name: "cinematic", bgColor: "#5F8109", image: cinematic },
  { name: "fantasy", bgColor: "#1DB954", image: fantasy },
  { name: "pop", bgColor: "#535353", image: pop },
  { name: "world", bgColor: "#55A891", image: world },
  { name: "folk", bgColor: "#477D95", image: folk },
];

export type Artist = {
  name: string;
  image: string;
};

const artists: Artist[] = [
  { name: "Beyonce", image: beyonce },
  { name: "Cardi B", image: cardi },
  { name: "Charlie Puth", image: charliePuth },
  { name: "Diana Ross", image: dianaRoss },
  { name: "Marvin Gaye", image: marvinGaye },
  { name: "Usher", image: usher },
];

const topGenres: GenreType[] = [
  { name: "Hip Hop", bgColor: "#E6105B", image: hiphop },
  { name: "electronic", bgColor: "#57A892", image: electronic },
  { name: "alternative", bgColor: "#EE3AA3", image: alternative },
];

export default function Search() {
  return (
    <Box
      sx={{
        backgroundColor: "#191414",
        pt: 2,
        px: 28 / 8,
      }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, fontSize: 32, fontWeight: 700, lineHeight: "40px" }}
      >
        Recent searches
      </Typography>
      <Artists artists={artists} />
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Your top genres
      </Typography>
      <Genres
        genres={topGenres}
        gridSizelg={4}
        gridSizemd={4}
        gridSizesm={6}
        gridSizexs={6}
      />
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Browse all
      </Typography>
      <Genres
        genres={allGenres}
        gridSizelg={2}
        gridSizemd={4}
        gridSizesm={6}
        gridSizexs={6}
      />
    </Box>
  );
}
