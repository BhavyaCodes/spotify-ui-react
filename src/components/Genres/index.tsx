import { Grid, GridSize } from "@mui/material";
import { Genre, GenreType } from "./Genre";

interface AppProps {
  genres: GenreType[];
  gridSizelg: GridSize;
  gridSizemd: GridSize;
  gridSizesm: GridSize;
  gridSizexs: GridSize;
}

export default function Genres({
  genres,
  gridSizelg,
  gridSizemd,
  gridSizesm,
  gridSizexs,
}: AppProps) {
  function renderGenres() {
    return genres.map((genre) => (
      <Grid
        key={genre.name}
        item
        lg={gridSizelg}
        md={gridSizemd}
        sm={gridSizesm}
        xs={gridSizexs}
      >
        <Genre {...genre} />
      </Grid>
    ));
  }

  return (
    <Grid container spacing={4}>
      {renderGenres()}
    </Grid>
  );
}
