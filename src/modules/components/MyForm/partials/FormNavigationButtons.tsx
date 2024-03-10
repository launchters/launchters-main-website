import { Box, Button } from "@mui/material";
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
        <Button onClick={handlePreviousStep}>Anterior</Button>
      )}
      {currentStep < maxSteps - 1 && (
        <Button onClick={handleNextStep}>Siguiente</Button>
      )}
      {currentStep === maxSteps - 1 && <Button type="submit">Enviar</Button>}
    </Box>
  );
}
