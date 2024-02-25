import { Grid, SxProps, Typography, TypographyOwnProps } from "@mui/material";
import React from "react";

const subtitleProps: TypographyOwnProps = {
  color: "inherit",
  variant: "h2",
  fontWeight: 600,
  letterSpacing: "0.1em",
  sx: {
    textAlign: "left",
    fontSize: { xs: "1rem", sm: "1.2rem" },
    opacity: 0.5,
    fontWeight: 100,
    textTransform: "unset",
    mt: 1,
    mb: { xs: 0, sm: 1 },
  },
};

type ProductHeroSubtitleProps = { sx: SxProps };

export default function ProductHeroSubtitle({ sx }: ProductHeroSubtitleProps) {
  return (
    <React.Fragment>
      <Grid item {...{ sx, pt: { xs: 5, md: 0 } }}>
        <Typography {...subtitleProps} className="block">
          Eligiendo al Socio de Crecimiento (Growth Partner) adecuado,
        </Typography>
      </Grid>
      <Grid item sx={{ ...sx, mb: { xs: 4, md: 0 } }}>
        <Typography {...subtitleProps} className="block">
          que aplique <strong>estrategias probadas.</strong>
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
