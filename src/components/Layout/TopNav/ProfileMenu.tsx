import { Box, Avatar, Typography, SvgIcon } from "@mui/material";
import { ReactComponent as bottomArrow } from "assets/icons/bottom-arrow.svg";

export function ProfileMenu() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 500,
        height: 24,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "#282828",
        },
      }}
    >
      <Avatar
        alt="Cindy Baker"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        sx={{ height: 16, width: 16, ml: 0.5 }}
      />
      <Typography
        sx={{
          fontSize: 10,
          pl: 0.5,
          fontWeight: 400,
          display: { xs: "none", sm: "inherit" },
        }}
      >
        Cody Fisher
      </Typography>
      <SvgIcon
        component={bottomArrow}
        viewBox="0 0 6 3"
        sx={{ fontSize: "10px", ml: 3.5 / 8, mr: 5.5 / 8 }}
      />
    </Box>
  );
}
