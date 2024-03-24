import { Box, Typography } from "@mui/material";
import StyledButton from "../../StyledButton";
import { FormNavigationButtonProps } from "../models/FormNavigationButtonProps";
import theme from "../../../../../src/config/theme";

interface NavigationButtonProps {
  variant?: "text" | "outlined" | "contained";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
  className: string;
  marginRight: number | string;
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  variant,
  onClick,
  id,
  className,
  marginRight,
  children,
  type,
}) => (
  <StyledButton
    variant={variant}
    onClick={onClick}
    id={id}
    className={className}
    type={type}
    sx={{
      mr: marginRight,
    }}
  >
    <Typography variant={theme.breakpoints.down("sm") ? "body1" : "body2"}>
      {children}
    </Typography>
  </StyledButton>
);

export default function FormNavigationButtons({
  currentStep,
  handlePreviousStep,
  handleNextStep,
  maxSteps,
}: FormNavigationButtonProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      {currentStep > 0 && (
        <NavigationButton
          variant="outlined"
          onClick={handlePreviousStep}
          id={`back-button__step-${currentStep}`}
          className={`back-button step-${currentStep}`}
          marginRight={theme.breakpoints.down("sm") ? 1 : 2}
        >
          Anterior
        </NavigationButton>
      )}
      {currentStep < maxSteps - 1 && (
        <NavigationButton
          onClick={handleNextStep}
          id={`next-button step-${currentStep}`}
          className={`next-button step-${currentStep}`}
          marginRight={theme.breakpoints.down("sm") ? 1 : 2}
        >
          Siguiente
        </NavigationButton>
      )}
      {currentStep === maxSteps - 1 && (
        <NavigationButton
          type="submit"
          id={`submit-btn`}
          className={`step-${currentStep}`}
          marginRight={theme.breakpoints.down("sm") ? 1 : 2}
        >
          Enviar
        </NavigationButton>
      )}
    </Box>
  );
}
