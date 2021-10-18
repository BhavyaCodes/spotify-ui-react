import { Grid, GridSize } from "@mui/material";
import { Genre, GenreType } from "./Genre";

interface AppProps {
  genres: GenreType[];
  gridSize: GridSize;
}

export default function Genres({ genres, gridSize }: AppProps) {
  function renderGenres() {
    return genres.map((genre) => (
      <Grid key={genre.name} item lg={gridSize}>
        <Genre {...genre} />
      </Grid>
    ));
  }

  return (
    <Grid container spacing={5}>
      {renderGenres()}
    </Grid>
  );
}
