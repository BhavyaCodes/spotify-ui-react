import { SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Paths } from "types";
import { Link } from "react-router-dom";

interface LeftbarOptionProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text: string;
  viewBox: string;
  top?: number;
  left?: number;
  path: Paths;
}

export function LeftbarOptionTop({
  icon,
  text,
  viewBox,
  top,
  left,
  path,
}: LeftbarOptionProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Box
      sx={{
        cursor: "pointer",
        color: "rgb(179, 179, 179)",
        fill: "rgb(179, 179, 179)",

        ":hover": {
          "& > * ": {
            color: "white !important",
            fill: "white",
          },
        },
      }}
    >
      <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
        <Box
          sx={{
            my: 0.5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: isActive ? "#282828" : "inherit",
            borderRadius: 1,
            transition: "all .2s ease-out",
            height: 24,
          }}
        >
          <Box pr={1} pl={13 / 8} my={0.5} sx={{ fontSize: 16 }}>
            <SvgIcon
              fontSize="inherit"
              // fontSize={16}
              component={icon}
              viewBox={viewBox}
              sx={{ position: "relative", top }}
              fill="inherit"
              height="60%"
            />
          </Box>
          <Typography
            sx={{
              fontSize: 12,
              // fontWeight: isActive ? 900 : 700,
              fontWeight: 700,
              color: isActive ? "white" : "inherit",
              textDecoration: "none",
              "&:link": {
                textDecoration: "none",
                // color: "pink",
              },
            }}
          >
            {text}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
}
