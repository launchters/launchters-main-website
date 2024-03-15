import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";

interface FormStepperProps {
  currentStep: number;
  totalSteps: number;
}

export const FormStepper: React.FC<FormStepperProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <MobileStepper
      variant="progress"
      steps={totalSteps}
      position="static"
      activeStep={currentStep}
      sx={{
        flexGrow: 1,
        margin: "0 auto",
        marginBottom: "20px",
        justifyContent: "center",
      }}
      backButton={<></>} //? Esto es para que no se muestre el botón de retroceso
      nextButton={<></>} //? Esto es para que no se muestre el botón de avance
    />
  );
};
