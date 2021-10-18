import { LeftbarOptionTop } from "./LeftbarOptionTop";

import { ReactComponent as home } from "assets/icons/home.svg";
import { ReactComponent as library } from "assets/icons/library.svg";
import { ReactComponent as search } from "assets/icons/search.svg";
import { ReactComponent as plus } from "assets/icons/plus.svg";
import { ReactComponent as heart } from "assets/icons/heart.svg";
import { LeftbarOptionBottom } from "./LeftbarOptionBottom";
import { Box } from "@mui/material";
import { Genres } from "./Genres";

export default function index() {
  return (
    <Box
      sx={{
        pb: {
          sm: 150 / 8,
          lg: 90 / 8,
        },
      }}
    >
      <LeftbarOptionTop
        icon={home}
        text="Home"
        viewBox="0 0 15 16"
        top={2}
        path="/"
      />
      <LeftbarOptionTop
        icon={search}
        text="Search"
        viewBox="0 0 15 16"
        top={2}
        path="/search"
      />
      <LeftbarOptionTop
        icon={library}
        text="Your Library"
        viewBox="0 0 15 16"
        top={2}
        path="/library"
      />

      <LeftbarOptionBottom
        icon={plus}
        text="Create Playlist"
        viewBox="0 0 8 8"
        top={2}
        background="#B2B2B2"
        sx={{ mt: 4 }}
      />
      <LeftbarOptionBottom
        icon={heart}
        text="Create Playlist"
        viewBox="0 0 8 7"
        top={2}
        background="linear-gradient(135deg, #2D1CA3 0%, #899C99 100%)"
        sx={{ mt: 2 }}
      />
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#B2B2B2",
          width: "90%",
          margin: "auto",
          opacity: "20%",
          marginTop: 3,
        }}
      />
      <Genres />
    </Box>
  );
}
