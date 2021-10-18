import { Box, SvgIcon } from "@mui/material";
import { ReactComponent as leftArrow } from "assets/icons/left-arrow.svg";
import { ReactComponent as rightArrow } from "assets/icons/right-arrow.svg";
import { ProfileMenu } from "./ProfileMenu";
import { SearchBar } from "./SearchBar";

export function TopNav() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: -1.5,
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        width: "100%",
        px: {
          xs: 1,
          sm: 1.5,
          md: 2,
        },
        pt: 2.5,
        // p: (theme) => (theme.breakpoints.down("sm") ? 10 : 1),
      }}
    >
      <Box
        sx={{
          backgroundColor: "#0A0808",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: {
            xs: 1,
            sm: 1.5,
          },
          borderRadius: "50%",
          fontSize: 15,
          fontWeight: 900,
          strokeWidth: 200,
          mr: (theme) => theme.spacing(2),
        }}
      >
        <SvgIcon
          component={leftArrow}
          viewBox="0 0 5 8"
          fontSize="inherit"
          sx={{ position: "relative", right: 1 }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#0A0808",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: {
            xs: 1,
            sm: 1.5,
          },
          borderRadius: "50%",
          fontSize: 15,
          fontWeight: 900,
          strokeWidth: 200,
        }}
      >
        <SvgIcon
          component={rightArrow}
          viewBox="0 0 5 8"
          fontSize="inherit"
          sx={{ position: "relative", left: 1 }}
        />
      </Box>
      <SearchBar sx={{ ml: { xs: 1, sm: 1.5, md: 3 } }} />
      <Box sx={{ marginLeft: "auto" }}>
        <ProfileMenu />
      </Box>
    </Box>
  );
}
