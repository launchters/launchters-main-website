import { Box } from "@mui/material";
import ButtonCustom from "../../ButtonCustom";
import { FormNavigationButtonProps } from "../models/FormNavigationButtonProps";
import StyledButton from "../styled-components/StyledButton";

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
