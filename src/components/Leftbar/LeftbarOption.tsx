import { SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/material";

interface LeftbarOptionProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  // viewBox
  text: string;
  background?: string;
  viewBox: string;
  top?: number;
  left?: number;
}

export function LeftbarOption({
  icon,
  text,
  background,
  viewBox,
  top,
  left,
}: LeftbarOptionProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Box p={1.5} pl={20 / 8}>
        <SvgIcon
          fontSize="small"
          component={icon}
          viewBox={viewBox}
          sx={{ position: "relative", top: 2 }}
        />
      </Box>
      <Typography>{text}</Typography>
    </Box>
  );
}
