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

const genres: GenreType[] = [
  { name: "Hip Hop", bgColor: "#E6105B", image: hiphop },
  { name: "electronic", bgColor: "#57A892", image: electronic },
  { name: "alternative", bgColor: "#EE3AA3", image: alternative },
];

export default function Search() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Recent searches
      </Typography>
      <Artists artists={artists} />
      <Typography variant="h4" sx={{ mt: 4 }}>
        Your top genres
      </Typography>
      <Genres genres={genres} gridSize={4} />
    </Box>
  );
}
