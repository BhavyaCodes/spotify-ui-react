import { Box, Typography } from "@mui/material";

export type GenreType = {
  name: string;
  image: string;
  bgColor: string;
};

export function Genre({ name, image, bgColor }: GenreType) {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: 1,
        p: 1,
        height: 200,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography variant="h4">{name}</Typography>
      <img
        src={image}
        style={{
          width: "120px",
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "rotateZ(30deg) translate(20%, -10%)",
        }}
        alt={name}
      />
    </Box>
  );
}
