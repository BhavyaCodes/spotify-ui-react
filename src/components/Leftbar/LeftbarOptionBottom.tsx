import { SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";

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
  // path: Paths;
  background: string;
  sx?: SxProps;
}

export function LeftbarOptionBottom({
  icon,
  text,
  viewBox,
  top,
  left,
  // path,
  background,
  sx,
}: LeftbarOptionProps) {
  // const location = useLocation();
  // const isActive = location.pathname === path;

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
        ...sx,
      }}
    >
      {/* <Link to={path} style={{ textDecoration: "none", color: "inherit" }}> */}
      <Box
        sx={{
          m: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: isActive ? "#282828" : "inherit",
          backgroundColor: "inherit",
          borderRadius: 0.5,
          transition: "all .2s ease-out",
        }}
      >
        <Box ml={1.5} mr={1.5} pr={0.9} px={0.6} py={0.2} sx={{ background }}>
          <SvgIcon
            fontSize="inherit"
            component={icon}
            viewBox={viewBox}
            sx={{ position: "relative", top }}
            fill="inherit"
          />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            // color: isActive ? "white" : "inherit",
            color: "inherit",
            textDecoration: "none",
            "&:link": {
              textDecoration: "none",
              color: "pink",
            },
          }}
        >
          {text}
        </Typography>
      </Box>
      {/* </Link> */}
    </Box>
  );
}
