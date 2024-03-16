import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FormProvider, UseFormReturn } from "react-hook-form";
import theme from "../../../../config/theme";
import { IFormInput } from "../models/FormInputTypes";
import FormStep from "../models/FormStep";
import UseStepsHandlerReturnType from "../models/useHandlerReturnType";
import FormNavigationButtons from "../partials/FormNavigationButtons";
import { StyledProgressBar } from "./StyledProgressBar";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  backdropFilter: "blur(10px)",
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0px 15px 15px rgba(4, 75, 217, 0.3)`,
  width: "50%",
  border: `1px solid ${theme.palette.divider}`,
}));

interface Props extends UseStepsHandlerReturnType {
  methods: UseFormReturn<IFormInput>;
  children: React.ReactNode | React.ReactNode[];
  currentStep: number;
  steps: FormStep[];
  handleSubmitOnValid: (formData: IFormInput) => Promise<void>;
}

function StyledFormBox({
  methods,
  children,
  currentStep,
  steps,
  handleSubmitOnValid,
  handleNextStep,
  handlePreviousStep,
}: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && currentStep < steps.length - 1) {
      e.preventDefault();
      handleNextStep();
    }
    // Else: submit form
  };

  return (
    <StyledBox>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmitOnValid)}
          onKeyDown={handleKeyDown}
        >
          {/* <Box
          sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          }}
          > */}
          <StyledProgressBar
            currentStep={currentStep}
            totalSteps={steps.length}
            // TODO Remove next two lines to make the color of the bar the PRIMARY (not the accent/secondary) and also make the background to match the color of the container
            color={theme.palette.secondary.dark}
            backgroundColor={theme.palette.secondary.light}
          />
          {/* </Box> */}
          {children}
          <FormNavigationButtons
            currentStep={currentStep}
            {...{ handlePreviousStep, handleNextStep }}
            maxSteps={steps.length}
          />
        </form>
      </FormProvider>
    </StyledBox>
  );
}

export default StyledFormBox;
