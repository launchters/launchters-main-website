import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import appConfig from "../../../../config/app.config";
import StyledButton from "../../StyledButton";
import CalendarBookACallWidget from "../../calendars/CalendarBookACallWidget";
import ResultStep from "../Steps/ResultStep";

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
  const [
    selectedVariant,
    // setSelectedVariant
  ] = useState(vslVideoVariants.gppCalcSuccessBookCall[0]);
  const [showBookingCalendar, setShowBookingCalendar] = useState(false);

  const handleConfirmation = () => {
    setShowBookingCalendar(true);
  };

  const CtaButtonLayout = () => (
    <Box sx={{ my: 5 }}>
      <StyledButton onClick={handleConfirmation}>
        <FaPhone style={{ marginRight: "0.5rem" }} />
        Agendar mi llamada GRATIS
      </StyledButton>
      <Typography
        variant="h6"
        component="p"
        sx={{ mt: 2, mb: 2, fontSize: "1rem" }}
      >
        ¡Es el momento de actuar hoy, para cambiar el mañana!
      </Typography>
    </Box>
  );

  return (
    <ResultStep
      icon={<GiPartyPopper size={50} style={{ marginRight: "1rem" }} />}
      title={"Aunque todo parece correcto..."}
      videoSrc={selectedVariant.src}
      cta={
        showBookingCalendar ? <CalendarBookACallWidget /> : <CtaButtonLayout />
      }
    >
      <Typography variant="subtitle1" sx={{ ...textSx, mb: 0 }}>
        Un humano revisará tus resultados antes de enviártelos...
        <br />
        ¡Y ese humano soy yo: Alex!
      </Typography>
      <Typography variant="body2" component="p" sx={{ mt: 0 }}>
        Puede que tarde un poco... pero te los{" "}
        <b>enviaré tan pronto como sea posible</b>.
      </Typography>

      <Typography variant="body2" component="p" sx={{ mt: 2 }}>
        Te sugiero que{" "}
        <strong>
          reserves una llamada conmigo para estudiar tu caso en detalle.
        </strong>{" "}
        y saber en qué partes de tu negocio puedo ayudarte a crecer.
      </Typography>
    </ResultStep>
  );
};

export default YesQualifiedResult;
