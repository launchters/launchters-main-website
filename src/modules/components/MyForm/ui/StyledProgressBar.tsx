import { MobileStepper } from "@mui/material";

interface StyledProgressBarProps {
  currentStep: number;
  totalSteps: number;
  color?: string;
  trackColor?: string;
  backgroundColor?: string;
}

export const StyledProgressBar: React.FC<StyledProgressBarProps> = ({
  currentStep,
  totalSteps,
  color = "primary",
  backgroundColor = "transparent",
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
        backgroundColor: backgroundColor,
        "& .MuiLinearProgress-barColorPrimary": {
          backgroundColor: color,
        },
      }}
      backButton={<></>}
      nextButton={<></>}
    />
  );
};
