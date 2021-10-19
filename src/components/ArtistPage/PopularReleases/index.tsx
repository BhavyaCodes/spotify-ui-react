import { Grid, Typography } from "@mui/material";
import { PopularReleaseType, Title } from "./Title";

interface AppProps {
  releases: PopularReleaseType[];
}

export default function PopularReleases({ releases }: AppProps) {
  function renderReleases() {
    return releases.map((release) => (
      <Grid key={release.title} item lg={2} md={3} sm={4} xs={6}>
        <Title {...release} />
      </Grid>
    ));
  }
  return (
    <>
      <Typography fontSize={20} lineHeight="24px" sx={{ mt: 3 }} gutterBottom>
        Popular releases
      </Typography>
      <Grid container spacing={3} mt={1.5}>
        {renderReleases()}
      </Grid>
    </>
  );
}
