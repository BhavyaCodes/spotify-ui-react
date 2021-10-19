import { Box, Grid, SvgIcon, Typography } from "@mui/material";
import { ArtistPopularSongType } from "pages/Artist";
import { ReactComponent as HeartSolid } from "assets/icons/heart-solid.svg";

interface AppProps {
  popularSongs: ArtistPopularSongType[];
}

export function ArtistPopularSongs({ popularSongs }: AppProps) {
  function renderSongs() {
    return popularSongs.map((song, i) => (
      <Box
        key={song.title}
        display="flex"
        alignItems="center"

        // justifyContent="space-between"
      >
        <Box mr={2}>{i + 1}</Box>
        <img height="50px" width="50px" src={song.image} alt={song.title} />
        <Typography sx={{ p: 2, width: "40%" }}>{song.title}</Typography>
        <Typography sx={{ p: 2, width: "20%" }}>
          {song.hits.toLocaleString()}
        </Typography>
        <Typography sx={{ p: 2, pr: 1, ml: 2 }}>{song.length}</Typography>
      </Box>
    ));
  }
  return (
    <Box mt={3}>
      <Grid container spacing={0}>
        <Grid item lg={8}>
          <Typography fontSize={20} lineHeight="24px" sx={{ mb: 1.5 }}>
            Popular
          </Typography>
          {renderSongs()}
          <Typography sx={{ mt: 2 }} fontSize={12} gutterBottom>
            SEE MORE
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography fontSize={24} gutterBottom>
            Liked Songs
          </Typography>
          <Box display="flex" alignItems="center">
            <Box position="relative">
              <img
                src={popularSongs[0].image}
                width="80px"
                alt={popularSongs[0].title}
                style={{ borderRadius: 500 }}
              />
              <SvgIcon
                viewBox="0 0 24 24"
                component={HeartSolid}
                style={{ position: "absolute", bottom: "10%", right: "2%" }}
              />
            </Box>
            <Box pl={1.5}>
              <Typography fontSize={20}>You've liked 4 songs</Typography>
              <Typography
                sx={{ color: (theme) => theme.palette.grey[600], fontSize: 10 }}
              >
                By Ronaldo
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
