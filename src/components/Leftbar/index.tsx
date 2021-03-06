import { LeftbarOptionTop } from "./LeftbarOptionTop";

import { ReactComponent as home } from "assets/icons/home.svg";
import { ReactComponent as library } from "assets/icons/library.svg";
import { ReactComponent as search } from "assets/icons/search.svg";
import { ReactComponent as plus } from "assets/icons/plus.svg";
import { ReactComponent as heart } from "assets/icons/heart.svg";
import { LeftbarOptionBottom } from "./LeftbarOptionBottom";
import { Box } from "@mui/material";
import { Genres } from "./Genres";

export default function LeftBar() {
  return (
    <Box
      sx={{
        mb: {
          sm: 150 / 8,
          lg: 7,
        },
        px: 1,
        pt: 2,
        backgroundColor: "#000000",
      }}
    >
      <LeftbarOptionTop
        icon={home}
        text="Home"
        viewBox="0 0 15 16"
        top={2.5}
        path="/"
      />
      <LeftbarOptionTop
        icon={search}
        text="Search"
        viewBox="0 0 15 16"
        top={2.5}
        path="/search"
      />
      <LeftbarOptionTop
        icon={library}
        text="Your Library"
        viewBox="0 0 16 16"
        top={2.5}
        path="/library"
      />

      <LeftbarOptionBottom
        icon={plus}
        text="Create Playlist"
        viewBox="0 0 8 8"
        background="#B2B2B2"
        sx={{ mt: 2 }}
      />
      <LeftbarOptionBottom
        icon={heart}
        text="Create Playlist"
        viewBox="0 0 8 7"
        background="linear-gradient(135deg, #2D1CA3 0%, #899C99 100%)"
        // sx={{ mt: 2 }}
      />
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#B2B2B2",
          width: "100%",
          margin: "auto",
          opacity: 0.2,
          marginTop: 2,
        }}
      />
      <Genres />
    </Box>
  );
}
