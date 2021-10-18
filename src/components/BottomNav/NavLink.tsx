import { Paths } from "types";
import { Box, SvgIcon, Typography } from "@mui/material";
import { useHistory } from "react-router";

export interface NavLinkProps {
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

export function NavLink({
  icon,
  viewBox,
  text,
  top,
  left,
  path,
}: NavLinkProps) {
  const history = useHistory();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      onClick={() => history.push(path)}
      sx={{
        transition: "all .2s ease-out",
        "&:hover": {
          color: "#fff",
        },
      }}
    >
      <SvgIcon viewBox={viewBox} component={icon} />
      <Typography>{text}</Typography>
    </Box>
  );
}
