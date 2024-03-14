import { Typography, Grid, Box } from "@mui/material";
import ButtonCustom from "../../ButtonCustom";

import { GiPartyPopper } from "react-icons/gi";
import { FcClock } from "react-icons/fc";
import { GrValidate } from "react-icons/gr";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const paragraphStyle = {
  textAlign: "center" as const,
  marginBottom: "16px",
  maxWidth: "600px",
};

const iconStyle = {
  verticalAlign: "middle",
  marginLeft: "4px",
};

const YesQualifiedResult: React.FC = () => {
  const handleConfirmation = () => {};
  // TODOS: Implementar lógica para redirigir a la página de confirmación

  return (
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
        style={{
          marginTop: "20px",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        ¡Felicidades! <br /> Has superado con éxito nuestro test de validación
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Tu esfuerzo y dedicación son dignos de reconocimiento, y estamos
        encantados de informarte que{" "}
        <Box component="span" fontWeight="bold">
          has calificado para avanzar en el proceso
        </Box>
        .
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Queremos asegurarnos de brindarte los resultados con la máxima precisión
        y cuidado. Por esta razón, ten en cuenta que nuestro equipo se tomará el
        tiempo necesario para revisar detenidamente tus respuestas. Los
        resultados serán procesados manualmente para garantizar la exactitud y
        la calidad que mereces. <GrValidate size={18} style={iconStyle} />
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Por favor, ten paciencia mientras completamos este proceso. Esperamos
        enviarte los resultados dentro de las próximas 24-72 horas.{" "}
        <FcClock size={18} style={iconStyle} />
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en
        contactarnos. Estamos aquí para ayudarte.
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        ¡Que tengas un bonito día!{" "}
        <FaRegFaceSmileBeam size={18} style={iconStyle} />
      </Typography>

      <ButtonCustom onClick={handleConfirmation}>
        Aquí podría ir un botón... o no :D
      </ButtonCustom>
    </Grid>
  );
};

export default YesQualifiedResult;
