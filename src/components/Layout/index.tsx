import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { ReactNode } from "react";
import Leftbar from "components/Leftbar";
import { TopNav } from "./TopNav";
import BottomControls from "components/BottomControls";
import Rightbar from "components/Rightbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import BottomNav from "components/BottomNav";

const drawerWidth = 240;

export default function Layout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: matches ? 0 : drawerWidth,
            },
          }}
          open
        >
          <Leftbar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          anchor="right"
        >
          <Rightbar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 0,
          // p: 0,
          width: { xl: `calc(100% - ${2 * drawerWidth}px)` },
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // pb: "3rem",
          maxHeight: "100vh",
          overflowY: "scroll",
          position: "relative",
          // mb: {
          //   sm: 150,
          //   md: 150,
          //   lg: 60,
          // },
          pb: {
            sm: 150 / 8,
            lg: 90 / 8,
          },
        }}
      >
        <TopNav />

        {children}
      </Box>

      <BottomControls />
      <BottomNav />
    </Box>
  );
}
