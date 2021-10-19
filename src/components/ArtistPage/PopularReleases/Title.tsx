import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export type PopularReleaseType = {
  image: string;
  title: string;
};

interface AppProps extends PopularReleaseType {}

export function Title({ image, title }: AppProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#2B2626",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1.5,
      }}
    >
      <img style={{ width: "100%", borderRadius: 1 }} src={image} alt={title} />
      <Typography sx={{ alignSelf: "flex-start", my: 2 }}>{title}</Typography>
    </Box>
  );
}
