import { Box, Grid, Stack, Typography } from "@mui/material";
import ButtonCustom from "../../ButtonCustom";
import { Suspense, useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import appConfig from "../../../../config/app.config";

const textSx = { mb: 2 };

const vslStorageUrl = `${appConfig.storageUrls.vslVideos}/Growth-Partner-Program/book-a-call`;
const vslVideoVariants = {
  gppCalcSuccessBookCall: [
    {
      src: `${vslStorageUrl}/VID_20240314_165007%5B2%5D.mp4`,
      // cover: `${vslStorageUrl}/book-a-call/VID_20240314_165007%5B2%5D-Cover.jpg`,
    },
  ],
};

const YesQualifiedResult: React.FC = () => {
  const vslVariants = vslVideoVariants.gppCalcSuccessBookCall;

  const [
    selectedVariant,
    // setSelectedVariant
  ] = useState(vslVariants[0]);

  const handleConfirmation = () => {};
  // TODOS: Implementar lógica para redirigir a la página de confirmación

  return (
    <Box sx={{ width: "min(50rem,90%)", margin: "0 auto" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <GiPartyPopper size={50} />
        <Typography
          variant="h3"
          className="title-margin"
          sx={{ mb: 2, mt: 2, textAlign: "center" }}
        >
          Aunque todo parece correcto...
        </Typography>
        <Typography variant="subtitle1" sx={textSx}>
          Un humano revisará tus resultados antes de enviártelos...
          <br />
          ¡Y ese humano soy yo: Alex!
        </Typography>
        <Stack sx={{ margin: "1rem auto" }}>
          <Suspense fallback={`Cargando vídeo...`}>
            <video
              controls
              autoPlay
              // poster={selectedVariant.cover}
              width={500}
              style={{ margin: "0 auto" }}
            >
              <source src={selectedVariant.src} type="video/mp4" />
              Tu navegador no soporta el vídeo.
            </video>
          </Suspense>
        </Stack>
        <Typography variant="body1" sx={textSx}>
          Puede que tarde un poco... pero te los{" "}
          <b>enviaré tan pronto como sea posible</b>.
          <br />
          Te sugiero que{" "}
          <strong>
            reserves una llamada conmigo para estudiar tu caso en detalle.
          </strong>{" "}
          y saber en qué partes de tu negocio puedo ayudarte a crecer.
        </Typography>
        <Typography variant="body1" sx={textSx}>
          ¡Es el momento de actuar hoy para cambiar el mañana!
        </Typography>

        <ButtonCustom variant="contained" onClick={handleConfirmation}>
          Agendar llamada para estudiar mi caso concreto
        </ButtonCustom>
      </Grid>
    </Box>
  );
};

export default YesQualifiedResult;
