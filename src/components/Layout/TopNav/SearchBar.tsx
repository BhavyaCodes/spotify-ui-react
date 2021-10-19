import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { ReactComponent as searchIcon } from "assets/icons/search.svg";
import { SvgIcon, Box } from "@mui/material";
import { SxProps } from "@mui/system";

export function SearchBar({ sx }: { sx?: SxProps }) {
  return (
    <Paper
      component="form"
      sx={{
        // p: "2px 4px",
        px: 1.5,
        display: "flex",
        alignItems: "center",
        width: 240,
        height: 24,
        borderRadius: "500px",
        backgroundColor: "#ffffff",
        ...sx,
      }}
    >
      <Box
        // pl={1}
        fontSize={20}
        sx={{
          filter: "invert(100)",
          height: 12,
          width: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12,
          ml: 1,
        }}
      >
        <SvgIcon
          fontSize="inherit"
          component={searchIcon}
          viewBox="0 0 15 16"
          sx={{
            position: "relative",
            "& path": {
              fill: "#777777",
            },
          }}

          // color="black"
        />
      </Box>
      <InputBase
        sx={{
          ml: 1,
          mt: 0.25,
          flex: 1,
          fontSize: 10,
          lineHeight: 200,
          "& input::placeholder": {
            color: "black",
            fontSize: 10,
            fontWeight: 400,
          },
          "& input": {
            caretColor: "black",
            color: "black",
          },
        }}
        placeholder="Artists, songs, or podcasts"
        inputProps={{ "aria-label": "search artists, songs, or podcasts" }}
      />
    </Paper>
  );
}
