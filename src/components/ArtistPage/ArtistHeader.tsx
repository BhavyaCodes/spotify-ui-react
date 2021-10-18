import { ArtistInfoType } from "pages/Artist";
import {
  Box,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactComponent as Verified } from "assets/icons/verified.svg";

interface AppProps {
  artistInfo: ArtistInfoType;
}

export function ArtistHeader({ artistInfo }: AppProps) {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  const { name, image, listeners, verified } = artistInfo;

  return (
    <Box
      sx={{
        background: "rgba(83, 83, 83, 1)",
        p: 3,
        pt: 9,
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        style={{ borderRadius: "500px", width: downSm ? "150px" : "200px" }}
        alt={name}
      />
      <Box pl={3}>
        <Box display="flex">
          {verified && <SvgIcon component={Verified} viewBox="0 0 16 16" />}
          <Typography sx={{ ml: 1 }}>
            {verified && "Verified Artist"}
          </Typography>
        </Box>
        <Typography
          variant="h1"
          fontSize={downSm ? "3rem" : "6rem"}
          fontWeight={900}
        >
          {name}
        </Typography>
        <Typography>{`${listeners.toLocaleString()} monthly listeners`}</Typography>
      </Box>
    </Box>
  );
}
