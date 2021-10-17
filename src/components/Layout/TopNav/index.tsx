import { Box, SvgIcon } from "@mui/material";
import { ReactComponent as leftArrow } from "assets/icons/left-arrow.svg";
import { ReactComponent as rightArrow } from "assets/icons/right-arrow.svg";
import { SearchBar } from "./SearchBar";

export function TopNav() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#0A0808",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1.5,
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
          p: 1.5,
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
      <SearchBar sx={{ ml: 3 }} />
      <Box sx={{ marginLeft: "auto" }}>
        <button>asasd</button>
      </Box>
    </Box>
  );
}
