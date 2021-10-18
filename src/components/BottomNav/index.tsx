import { Box } from "@mui/material";
import { NavLink } from "./NavLink";

import { ReactComponent as home } from "assets/icons/home.svg";
import { ReactComponent as library } from "assets/icons/library.svg";
import { ReactComponent as search } from "assets/icons/search.svg";
import { Paths } from "types";

const navOptions: {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text: string;
  viewBox: string;
  path: Paths;
}[] = [
  { icon: home, text: "Home", viewBox: "0 0 15 16", path: "/" },
  { icon: search, text: "Search", viewBox: "0 0 15 16", path: "/search" },
  { icon: library, text: "Library", viewBox: "0 0 15 16", path: "/library" },
];

export default function BottomNav() {
  function renderNavLinks() {
    return navOptions.map((option) => <NavLink {...option} />);
  }
  return (
    <Box
      height={60}
      p={1}
      sx={{
        position: "absolute",
        width: "100%",
        display: { xs: "flex", lg: "none" },
        justifyContent: "space-around",
        backgroundColor: "black",
        bottom: 0,
        cursor: "pointer",
        color: (theme) => theme.palette.text.secondary,
      }}
    >
      {renderNavLinks()}
    </Box>
  );
}
