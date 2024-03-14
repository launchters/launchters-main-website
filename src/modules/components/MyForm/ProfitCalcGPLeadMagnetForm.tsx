import { Box } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { $TSFix } from "../../models/ts-fix.d";
import { AverageHoursStep } from "./Steps/AverageHoursStep";
import { EmailStep } from "./Steps/EmailStep";
import { InstagramStep } from "./Steps/InstagramStep";
import { InstagramViewsStep } from "./Steps/InstagramViewsStep";
import { MinimumIncomeStep } from "./Steps/MinimumIncomeStep";
import { MonthlyIncomeStep } from "./Steps/MonthlyIncomeStep";
import { useStepsHandler } from "./hooks/useStepsHandler";
import { IFormInput } from "./models/FormInputTypes";
import FormStep from "./models/FormStep";
import FormNavigationButtons from "./partials/FormNavigationButtons";
import { FormStepper } from "./partials/FormStepper";
import NoQualifiedResult from "./partials/NoQualifiedResult";
import YesQualifiedResult from "./partials/YesQualifiedResult";

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
    component: MonthlyIncomeStep,
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

  const handleSubmitOnValid = async (data: $TSFix) => {
    setIsQualifiedLead(true);
    console.log(data);

    // ! NOTAS PARA ALEX para mas adelante cuando hagamos las "Thank You" pages.
    // Podemos hacer el tracking desde los eventos de facebook?:
    // TODO Track conversion to 'Mail Extracted' with Facebook Events --> fbq('track', 'Lead Magnet Calc. Form: Mail extracted.');
    // TODO Track conversion to 'Thank You' Page with Facebook Events --> fbq('track', 'Lead Magnet Calc. Form: Qualified/Non-qualified Form Submit'); -- Deberan ser dos eventos, solo ejecutarse uno segun si el lead ha qualificado o no.
    // Is it a qualified lead or a non-qualified?
  };

  if (isQualifiedLead != undefined) {
    if (isQualifiedLead) return <YesQualifiedResult />;
    else return <NoQualifiedResult />;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitOnValid)}>
        <Box sx={stepperSxProps}>
          <FormStepper currentStep={currentStep} totalSteps={steps.length} />
        </Box>
        {renderStep()}
        <FormNavigationButtons
          currentStep={currentStep}
          {...{ handlePreviousStep, handleNextStep }}
          maxSteps={steps.length}
        />
      </form>
    </FormProvider>
  );
}
