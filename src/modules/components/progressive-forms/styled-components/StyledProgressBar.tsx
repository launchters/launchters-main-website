import { LinearProgress } from "@mui/material";
import theme from "../../../../config/theme";
// import theme from "../../../../config/theme";

interface Props {
  currentStep: number;
  totalSteps: number;
  filledColor?: string;
  unfilledColor?: string;
}

export const StyledProgressBar = ({
  currentStep,
  totalSteps,
  filledColor = theme.palette.primary.main,
  unfilledColor = theme.palette.primary.light,
}: Props) => {
  const sx = {
    borderRadius: theme.shape.borderRadius,
    "& .MuiLinearProgress-bar": {
      background: filledColor,
      borderRadius: theme.shape.borderRadius,
    },
    background: unfilledColor,
  };

  const maxPercent = 95;
  const minPercent = 0;

  const progress = Math.min(
    Math.max(minPercent, ((currentStep + 1) / totalSteps) * 100),
    maxPercent
  );

  return <LinearProgress variant="determinate" value={progress} {...{ sx }} />;
};
