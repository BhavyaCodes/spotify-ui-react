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
  background: string;
  sx?: SxProps;
}

export function LeftbarOptionBottom({
  icon,
  text,
  viewBox,
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
          // m: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: isActive ? "#282828" : "inherit",
          backgroundColor: "inherit",
          borderRadius: 0.5,
          transition: "all .2s ease-out",
        }}
      >
        {/* <Box ml={1.5} mr={1.5} pr={0.9} px={0.6} py={0.2} sx={{ background }}> */}
        <Box
          // pr={1}
          // pl={13 / 8}
          ml={1.5}
          my={0.5}
          mr={1}
          sx={{
            fontSize: 8,
            background,
            width: 16,
            height: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 0.25,
          }}
        >
          <SvgIcon
            fontSize="inherit"
            component={icon}
            viewBox={viewBox}
            sx={{ position: "relative" }}
            fill="inherit"
          />
        </Box>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 700,
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
