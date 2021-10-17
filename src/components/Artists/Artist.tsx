import { Box, Typography } from "@mui/material";
import { Artist as ArtistProp } from "pages/Search";
import { useHistory } from "react-router";

export function Artist({ name, image }: ArtistProp) {
  const history = useHistory();
  return (
    <Box
      sx={{
        backgroundColor: "#2B2626",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 1,
        cursor: "pointer",
      }}
      onClick={() => history.push("/artist")}
    >
      <Box p={2}>
        <img
          src={image}
          alt={name}
          style={{ borderRadius: 500, width: "100%" }}
        />
      </Box>
      <Box p={2} sx={{ alignSelf: "flex-start" }}>
        <Typography sx={{ fontSize: 14 }}>{name}</Typography>
        <Typography sx={{ fontSize: 12, opacity: 0.5 }}>Artist</Typography>
      </Box>
    </Box>
  );
}
