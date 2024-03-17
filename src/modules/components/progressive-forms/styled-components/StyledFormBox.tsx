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
  justifyContent: "flex-start",
  margin: "auto",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(0),
  backdropFilter: "blur(10px)",
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0px 5px 15px rgba(4, 75, 217, 0.3)`,
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
          {children}
          <FormNavigationButtons
            currentStep={currentStep}
            {...{ handlePreviousStep, handleNextStep }}
            maxSteps={steps.length}
          />
          <Box style={{ marginTop: "20px" }}>
            <StyledProgressBar
              currentStep={currentStep}
              totalSteps={steps.length}
              color={theme.palette.secondary.dark}
            />
          </Box>
        </form>
      </FormProvider>
    </StyledBox>
  );
}

export default StyledFormBox;
