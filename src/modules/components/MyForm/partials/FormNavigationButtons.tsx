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
        <ButtonCustom
          onClick={handlePreviousStep}
          id={`back-button__step-${currentStep}`}
          className={`back-button step-${currentStep}`}
        >
          Anterior
        </ButtonCustom>
      )}
      {currentStep < maxSteps - 1 && (
        <ButtonCustom
          onClick={handleNextStep}
          id={`next-button step-${currentStep}`}
          className={`next-button step-${currentStep}`}
        >
          Siguiente
        </ButtonCustom>
      )}
      {currentStep === maxSteps - 1 && (
        <ButtonCustom
          type="submit"
          id={`submit-btn`}
          className={`step-${currentStep}`}
        >
          Enviar
        </ButtonCustom>
      )}
    </Box>
  );
}
