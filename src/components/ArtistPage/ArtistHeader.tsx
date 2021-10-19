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
        pl: 28 / 8,
        pt: 108 / 8,
        display: "flex",
        alignItems: "center",
        pb: 4,
      }}
    >
      <img
        src={image}
        style={{ borderRadius: "500px", width: downSm ? "150px" : "160px" }}
        alt={name}
      />
      <Box pl={2}>
        <Box display="flex" fontSize={12} alignItems="center">
          {verified && (
            <SvgIcon
              component={Verified}
              fontSize="inherit"
              viewBox="0 0 16 16"
            />
          )}
          <Typography sx={{ ml: 0.5, fontSize: 12, lineHeight: "14px" }}>
            {verified && "Verified Artist"}
          </Typography>
        </Box>
        <Typography
          variant="h1"
          fontSize={downSm ? "3rem" : 80}
          lineHeight="96px"
          fontWeight={700}
        >
          {name}
        </Typography>
        <Typography
          sx={{ pt: 0.5, fontSize: 12, lineHeight: "14px" }}
        >{`${listeners.toLocaleString()} monthly listeners`}</Typography>
      </Box>
    </Box>
  );
}
