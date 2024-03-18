import { MobileStepper, MobileStepperProps } from "@mui/material";
import theme from "../../../../config/theme";

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
  color = theme.palette.primary.main,
  backgroundColor = "transparent",
}: Props) => {
  const hideSliderButtons: Pick<
    MobileStepperProps,
    "backButton" | "nextButton"
  > = {
    backButton: <></>,
    nextButton: <></>,
  };

  // TODO: No consigo anular totalmente es epacio entre la parte inferior barra de progreso y el borde interno de la caja de formulario

  return (
    <MobileStepper
      variant="progress"
      steps={totalSteps}
      position="static"
      activeStep={currentStep}
      sx={{
        border: "none",
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor,
        width: "100%",
        paddingBottom: theme.spacing(0),
        "& .MuiLinearProgress-root": {
          borderRadius: theme.shape.borderRadius,
        },
        "& .MuiLinearProgress-barColorPrimary": {
          backgroundColor: color,
        },
      }}
      {...hideSliderButtons}
    />
  );
};
