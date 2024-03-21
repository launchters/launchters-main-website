import { Box, Grid, Typography } from "@mui/material";
import { Suspense } from "react";
import { $TSFix } from "../../../models/ts-fix.d";

type Props = {
  icon: $TSFix;
  title: $TSFix;
  videoSrc: $TSFix;
  children: $TSFix;
  cta: $TSFix;
};

const ResultStep = ({ icon, title, videoSrc, children, cta }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 5,
        }}
      >
        {icon}
        <Typography
          variant="h3"
          className="title-margin"
          sx={{
            my: 1.5,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Grid
        container
        flexDirection="column"
        gap={2}
        alignItems="center"
        sx={{ m: 0, p: 0, px: 5 }}
      >
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <Suspense fallback={`Cargando vídeo...`}>
            <video
              controls
              autoPlay
              // poster={selectedVariant.cover}
              width="100%"
              style={{ margin: "auto" }}
            >
              <source src={videoSrc} type="video/mp4" />
              Tu navegador no soporta el vídeo.
            </video>
          </Suspense>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            {children}
          </Grid>
        </Grid>
      </Grid>
      {cta}
    </Box>
  );
};

export default ResultStep;
