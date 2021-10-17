import { Box, Typography } from "@mui/material";

export type GenreType = {
  name: string;
  image: string;
  bgColor: string;
};

export function Genre({ name, image, bgColor }: GenreType) {
  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <Typography>{name}</Typography>
      <img src={image} alt={name} />
    </Box>
  );
}
