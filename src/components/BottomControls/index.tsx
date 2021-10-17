import { Box, Paper, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
export default function BottomControls() {
  const [favorite, setFavorite] = useState(false);
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
        // height: "3rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box p={2} display="flex" alignItems="center">
          <img
            height="56px"
            width="56px"
            src="https://images.unsplash.com/photo-1628498048001-2f4635107dbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80"
            alt="song-art"
            style={{ objectFit: "cover" }}
          />
          <Box mx={2}>
            <Typography fontWeight={700} fontSize={14}>
              I Didn't Know
            </Typography>
            <Typography
              fontSize={12}
              sx={{ color: (theme) => theme.palette.text.secondary }}
            >
              Curren$y
            </Typography>
          </Box>
          {favorite ? (
            <FavoriteIcon
              sx={{
                cursor: "pointer",
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
              }}
              onClick={() => setFavorite(true)}
            />
          )}
        </Box>
      </Box>
    </Paper>
  );
}
