import { MobileStepper, MobileStepperProps } from "@mui/material";

interface Props {
  currentStep: number;
  totalSteps: number;
  color?: string;
  trackColor?: string;
  backgroundColor?: string;
}

export const StyledProgressBar = ({
  currentStep,
  totalSteps,
  color = "primary",
  backgroundColor = "transparent",
}: Props) => {
  const hideSliderButtons: Pick<
    MobileStepperProps,
    "backButton" | "nextButton"
  > = {
    backButton: <></>,
    nextButton: <></>,
  };

  return (
    // TODO: Ajustar a que aparezca pegada al borde superior o inferior de la StyledFormBox.
    // TODO: Una vez ajustada, redondear los bordes para que encajen con los aplicados a la caja del formulario StyledFormBox.
    // TODO: Cambiar el color al color principal de la app y no al de acento
    <MobileStepper
      variant="progress"
      steps={totalSteps}
      position="static"
      activeStep={currentStep}
      sx={{
        flexGrow: 1,
        margin: "0 auto",
        marging: 0,
        justifyContent: "center",
        backgroundColor,
        paddingBottom: 0,
        "& .MuiLinearProgress-root": {
          borderRadius: "4px", // Añade esto
        },
        "& .MuiLinearProgress-barColorPrimary": {
          backgroundColor: color,
        },
      }}
      {...hideSliderButtons}
    />
  );
};
