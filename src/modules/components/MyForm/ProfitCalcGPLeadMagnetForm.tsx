import {
  AverageHoursStep,
  EmailStep,
  InstagramStep,
  InstagramViewsStep,
  MinimumIncomeStep,
  CurrentMonthlyIncomeStep,
} from "./Steps";

import { Box } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useStepsHandler } from "./hooks/useStepsHandler";
import { IFormInput } from "./models/FormInputTypes";
import { StyledProgressBar } from "./styled-components/StyledProgressBar";

import FormStep from "./models/FormStep";
import FormNavigationButtons from "./partials/FormNavigationButtons";
import NoQualifiedResult from "./partials/NoQualifiedResult";
import YesQualifiedResult from "./partials/YesQualifiedResult";
import StyledFormBox from "./styled-components/StyledFormBox";
import theme from "../../../config/theme";

const steps: FormStep[] = [
  { title: "Instagram", component: InstagramStep, name: "instagram" },
  { title: "Email", component: EmailStep, name: "email" },
  {
    title: "Instagram Views",
    component: InstagramViewsStep,
    name: "instagramViews",
  },
  {
    title: "Minimum Income",
    component: MinimumIncomeStep,
    name: "minimumIncome",
  },
  {
    title: "Monthly Income",
    component: CurrentMonthlyIncomeStep,
    name: "monthlyIncome",
  },
  { title: "Average Hours", component: AverageHoursStep, name: "averageHours" },
];

const stepperSxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export default function ProfitCalcGPLeadMagnetForm() {
  const methods = useForm<IFormInput>();
  const [isQualifiedLead, setIsQualifiedLead] = useState<undefined | boolean>();
  const { currentStep, handleNextStep, handlePreviousStep } = useStepsHandler(
    methods,
    steps
  );
  const CurrentStepComponent = steps[currentStep].component;
  const renderStep = () => <CurrentStepComponent />;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && currentStep < steps.length - 1) {
      e.preventDefault();
      handleNextStep();
    }
    // Else: submit form
  };

  const handleSubmitOnValid = async (formData: IFormInput) => {
    const sName = steps[currentStep].name;
    setIsQualifiedLead(undefined);

    if (["instagram", "email"].includes(sName)) {
      // Dato de contacto introducido.
      // TODO ALEX: Track conversion to 'Mail/IG Extracted' with Facebook Events and GAnalytics.
    }

    // APPLY QUALIFICATION CRITERIAS:
    // ------------------------------
    switch (sName) {
      case "instagramViews":
        if (formData.instagramViews < 500) {
          // Pocas Views? No cualifica.
          setIsQualifiedLead(false);
        }
        break;
      case "monthlyIncome":
        if (formData.monthlyIncome * 5 < formData.minimumIncome) {
          // monthly Income actual demasiado alejado del deseado minimo
          setIsQualifiedLead(false);
        }
        break;
      case "averageHours":
        if (formData.averageHours < 8) {
          // monthly Income actual demasiado alejado del deseado minimo
          setIsQualifiedLead(false);
        }
        break;
      case "averageExpenses":
        if (formData.averageExpenses > 10000) {
          // monthly Income actual demasiado alejado del deseado minimo
          setIsQualifiedLead(false);
        }
        break;
    }

    if (currentStep === steps.length - 1 && isQualifiedLead !== false) {
      // Is last step and has not been disqualified? then is qualified.
      setIsQualifiedLead(true);
    }

    // TODO ALEX: Track conversion to 'Thank You' Page with Facebook Events -->
    // fbq('track', 'Lead Magnet Calc. Form: Qualified/Non-qualified Form Submit');
    // -- Deberan ser dos eventos, solo ejecutarse uno segun si el lead ha qualificado o no.
  };

  if (isQualifiedLead != undefined) {
    if (isQualifiedLead) return <YesQualifiedResult />;
    else return <NoQualifiedResult />;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmitOnValid)}
        onKeyDown={handleKeyDown}
      >
        <StyledFormBox>
          <Box sx={stepperSxProps}>
            <StyledProgressBar
              currentStep={currentStep}
              totalSteps={steps.length}
              // TODO Remove next two lines to make the color of the bar the PRIMARY (not the accent/secondary) and also make the background to match the color of the container
              color={theme.palette.secondary.dark}
              backgroundColor={theme.palette.secondary.light}
            />
          </Box>
          {renderStep()}
          <FormNavigationButtons
            currentStep={currentStep}
            {...{ handlePreviousStep, handleNextStep }}
            maxSteps={steps.length}
          />
        </StyledFormBox>
      </form>
    </FormProvider>
  );
}
