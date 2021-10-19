import { Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export function Left() {
  const [favorite, setFavorite] = useState(false);

  return (
    <Box p={2} display="flex" alignItems="center">
      <img
        height={48}
        width={48}
        src="https://images.unsplash.com/photo-1628498048001-2f4635107dbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80"
        alt="song-art"
        style={{ objectFit: "cover" }}
      />
      <Box ml={7 / 8} mr={1.5}>
        <Typography fontWeight={400} fontSize={12} lineHeight="14px">
          I Didn't Know
        </Typography>
        <Typography
          fontSize={10}
          lineHeight="12px"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          Curren$y
        </Typography>
      </Box>
      {favorite ? (
        <FavoriteIcon
          sx={{
            cursor: "pointer",
            width: "12px",
          }}
          onClick={() => setFavorite(false)}
          color="primary"
        />
      ) : (
        <FavoriteBorderIcon
          sx={{
            cursor: "pointer",
            color: (theme) => theme.palette.text.secondary,
            ":hover": {
              color: "#ffffff",
            },
            width: "12px",
          }}
          onClick={() => setFavorite(true)}
        />
      )}
    </Box>
  );
}
