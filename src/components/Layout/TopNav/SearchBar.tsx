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
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "500px",
        backgroundColor: "#ffffff",
        ...sx,
      }}
    >
      <Box
        pl={1}
        fontSize={20}
        sx={{
          filter: "invert(100)",
        }}
      >
        <SvgIcon
          fontSize="inherit"
          component={searchIcon}
          viewBox="0 0 15 16"
          sx={{ position: "relative", top: 3 }}
          // fill="black"
          // color="black"
        />
      </Box>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          "& input::placeholder": {
            color: "black",
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
