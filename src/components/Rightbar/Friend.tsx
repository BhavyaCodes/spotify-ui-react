import { Box, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Music } from "assets/icons/music.svg";
import { ReactComponent as Podcast } from "assets/icons/podcast.svg";
import { ReactComponent as PlayingNow } from "assets/icons/playing-now.svg";

export type FriendType = {
  name: string;
  title: string;
  artist: string;
  type: "podcast" | "music";
  time: string;
  image: string;
};

interface AppProps extends FriendType {}

export function Friend({ name, title, artist, type, time, image }: AppProps) {
  return (
    <Box display="flex" alignItems="center" position="relative">
      <Box position="absolute" sx={{ right: 3, top: 4, fontSize: 13 }}>
        {time === "now" ? (
          <SvgIcon
            component={PlayingNow}
            viewBox="0 0 6 10"
            fontSize="inherit"
          />
        ) : (
          <Typography
            sx={{
              // fontWeight: 100,
              fontSize: 10,
              lineHeight: 12 / 8,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            {time}
          </Typography>
        )}
      </Box>
      <img
        src={image}
        style={{ width: "36px", height: "36px", borderRadius: "500px" }}
        alt={name}
      />
      <Box
        display="flex"
        flexDirection="column"
        pl={1}
        py={0.5}
        sx={{ color: (theme) => theme.palette.text.secondary }}
      >
        <Typography fontSize={12} fontWeight={700} lineHeight={12 / 8}>
          {name}
        </Typography>
        <Typography fontSize={12} lineHeight={12 / 8}>
          {title}
        </Typography>
        <Box display="flex" fontSize={8} alignItems="center">
          {type === "podcast" ? (
            <SvgIcon component={Podcast} fontSize="inherit" viewBox="0 0 8 8" />
          ) : (
            <SvgIcon component={Music} fontSize="inherit" viewBox="0 0 8 8" />
          )}
          <Typography sx={{ ml: 0.5 }} fontSize={10} lineHeight={12 / 8}>
            {artist}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
