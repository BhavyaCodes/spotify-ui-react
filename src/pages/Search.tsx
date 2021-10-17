import { Box, Typography } from "@mui/material";
import beyonce from "assets/artists/beyonce.png";
import cardi from "assets/artists/cardi.png";
import charliePuth from "assets/artists/charlie-puth.png";
import dianaRoss from "assets/artists/diana-ross.png";
import marvinGaye from "assets/artists/marvin-gaye.png";
import usher from "assets/artists/usher.png";
import Artists from "components/Artists";

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

export default function Search() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Recent searches
      </Typography>
      <Artists artists={artists} />
    </Box>
  );
}
