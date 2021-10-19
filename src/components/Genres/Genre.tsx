import { Box, Typography } from "@mui/material";

export type GenreType = {
  name: string;
  image: string;
  bgColor: string;
};

interface AppProps extends GenreType {
  fontSize: number;
  lineHeight: string;
}

export function Genre({
  name,
  image,
  bgColor,
  fontSize,
  lineHeight,
}: AppProps) {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: 1,
        height: 200,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "1.8rem",
            lg: fontSize,
          },
          lineHeight: "40px",
          fontWeight: 700,
          mt: 1.5,
          ml: 2,
        }}
      >
        {name}
      </Typography>
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
