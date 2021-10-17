import { Artist as IArtist } from "pages/Search";
import { Grid } from "@mui/material";
import { Artist } from "./Artist";

export default function Artists({ artists }: { artists: IArtist[] }) {
  function renderArtists() {
    return artists.map((artist) => (
      <Grid item lg={2}>
        <Artist {...artist} />
      </Grid>
    ));
  }

  return (
    <Grid container spacing={5}>
      {renderArtists()}
    </Grid>
  );
}
