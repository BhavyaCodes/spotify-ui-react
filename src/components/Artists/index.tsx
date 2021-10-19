import { Artist as IArtist } from "pages/Search";
import { Grid } from "@mui/material";
import { Artist } from "./Artist";

export default function Artists({ artists }: { artists: IArtist[] }) {
  function renderArtists() {
    return artists.map((artist) => (
      <Grid key={artist.name} item lg={2} md={3} sm={4} xs={6}>
        <Artist {...artist} />
      </Grid>
    ));
  }

  return (
    <Grid container mt={-2.5} spacing={3}>
      {renderArtists()}
    </Grid>
  );
}
