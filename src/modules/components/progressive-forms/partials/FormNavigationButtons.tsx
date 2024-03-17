import { Box } from "@mui/material";
import StyledButton from "../../StyledButton";
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
        <StyledButton
          onClick={handlePreviousStep}
          id={`back-button__step-${currentStep}`}
          className={`back-button step-${currentStep}`}
        >
          Anterior
        </StyledButton>
      )}
      {currentStep < maxSteps - 1 && (
        <StyledButton
          onClick={handleNextStep}
          id={`next-button step-${currentStep}`}
          className={`next-button step-${currentStep}`}
        >
          Siguiente
        </StyledButton>
      )}
      {currentStep === maxSteps - 1 && (
        <StyledButton
          type="submit"
          id={`submit-btn`}
          className={`step-${currentStep}`}
        >
          Enviar
        </StyledButton>
      )}
    </Box>
  );
}
