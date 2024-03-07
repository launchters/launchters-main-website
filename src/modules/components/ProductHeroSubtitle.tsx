import { Grid, SxProps, Typography, TypographyOwnProps } from "@mui/material";
import appConfig from "../../config/app.config";

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

type ProductHeroSubtitleProps = { sx?: SxProps };

export default function ProductHeroSubtitle({ sx }: ProductHeroSubtitleProps) {
  return (
    <Grid
      container
      sx={{
        //  Only show in mobile
        my: 0,
        display: { xs: "none", md: "block" },
        pt: { xs: 5, md: 0 },
        ...sx,
      }}
    >
      <Grid item>
        <Typography
          {...subtitleProps}
          className="d-block"
          style={{ textAlign: appConfig.header.textAlign }}
        >
          Eligiendo al Socio de Crecimiento (Growth Partner) adecuado,
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          {...subtitleProps}
          className="d-block"
          style={{ textAlign: appConfig.header.textAlign }}
        >
          que aplique <strong>estrategias probadas.</strong>
        </Typography>
      </Grid>
    </Grid>
  );
}
