import { Typography } from "@mui/material";
import ResultStep from "../Steps/ResultStep";
import { IoIosWarning } from "react-icons/io";
import theme from "../../../../config/theme";

const textSx = { mb: 2 };

const SubmittedAlreadyResult = () => {
  return (
    <ResultStep
      icon={
        <IoIosWarning
          style={{ color: theme.palette.warning.dark, fontSize: "2em" }}
        />
      }
      title={"Ya has enviado este formulario antes."}
      cta={<></>}
    >
      <Typography variant="subtitle1" sx={{ ...textSx, mb: 0 }}>
        Si deseas modificarlo, contáctanos por privado en cualquiera de nuestras
        plataformas.
      </Typography>
    </ResultStep>
  );
};

export default SubmittedAlreadyResult;
