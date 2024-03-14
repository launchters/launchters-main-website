import { Box } from "@mui/material";
import ButtonCustom from "../../ButtonCustom";
import { FormNavigationButtonProps } from "../models/FormNavigationButtonProps";

export default function FormNavigationButtons({
  currentStep,
  handlePreviousStep,
  handleNextStep,
  maxSteps,
}: FormNavigationButtonProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      {currentStep > 0 && (
        <ButtonCustom onClick={handlePreviousStep}>Anterior</ButtonCustom>
      )}
      {currentStep < maxSteps - 1 && (
        <ButtonCustom onClick={handleNextStep}>Siguiente</ButtonCustom>
      )}
      {currentStep === maxSteps - 1 && (
        <ButtonCustom type="submit">Enviar</ButtonCustom>
      )}
    </Box>
  );
}
