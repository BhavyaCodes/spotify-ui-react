import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import { ReactNode, useState } from "react";
import Leftbar from "components/Leftbar";
import { TopNav } from "./TopNav";
import BottomControls from "components/BottomControls";
import Rightbar from "components/Rightbar";

const drawerWidth = 240;

export default function Layout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = () => window.document.body;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* {drawer} */}
          <Leftbar />
        </Drawer>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* {drawer} */}
          <Rightbar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Leftbar />
          {/* {drawer} */}
        </Drawer>
        <Drawer
          // anchor="right"
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          anchor="right"
        >
          <Rightbar />
          {/* {drawer} */}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 3,
          width: { sm: `calc(100% - ${2 * drawerWidth}px)` },
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          pb: "3rem",
          backgroundColor: "#191414",
          // overflowX: "auto",
          // height: "auto",
          maxHeight: "100vh",
          overflowY: "scroll",
        }}
      >
        <TopNav />
        {/* <button onClick={handleDrawerToggle}>Open drawer</button> */}

        {children}
      </Box>

      <BottomControls />
    </Box>
  );
}
