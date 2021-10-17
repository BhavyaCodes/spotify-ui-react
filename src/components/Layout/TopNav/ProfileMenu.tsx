import { Box, Avatar, Typography, SvgIcon } from "@mui/material";
import { ReactComponent as bottomArrow } from "assets/icons/bottom-arrow.svg";

export function ProfileMenu() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        borderRadius: 500,
        height: 30,
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
        sx={{ height: 22, width: 22, ml: 0.5 }}
      />
      <Typography sx={{ fontSize: 12, pl: 1, fontWeight: 700 }}>
        Cody Fisher
      </Typography>
      <SvgIcon
        component={bottomArrow}
        viewBox="0 0 6 3"
        sx={{ fontSize: "12px", mx: 1 }}
      />
    </Box>
  );
}
