import { Box, Button } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { $TSFix } from "../../models/ts-fix.d";
import { IFormInput } from "./models/FormInputTypes";
import { FormStepper } from "./FormStepper";
import { EmailStep } from "./Steps/EmailStep";
import { InstagramStep } from "./Steps/InstagramStep";
import { InstagramViewsStep } from "./Steps/InstagramViewsStep";
import { MinimumIncomeStep } from "./Steps/MinimumIncomeStep";
import { MonthlyIncomeStep } from "./Steps/MonthlyIncomeStep";
import { useStepsHandler } from "./hooks/useStepsHandler";

interface Step<P extends Partial<IFormInput>> {
  title: string;
  component: React.FC<P>;
}

const steps: Array<Step<Partial<IFormInput>>> = [
  { title: "Email", component: EmailStep },
  { title: "Instagram", component: InstagramStep },
  { title: "Instagram Views", component: InstagramViewsStep },
  { title: "Minimum Income", component: MinimumIncomeStep },
  { title: "Monthly Income", component: MonthlyIncomeStep },
];

export default function ProfitCalcGPLeadMagnetForm() {
  const methods = useForm<IFormInput>();
  const { currentStep, handleNextStep, handlePreviousStep } = useStepsHandler(
    steps.length
  );

  const renderStep = (): JSX.Element => {
    const StepComponent = steps[currentStep].component;
    const stepProps = {
      ...methods.getValues(),
      onNext: handleNextStep,
    };
    return <StepComponent {...stepProps} />;
  };

  const handleSubmitOnValid = async (data: $TSFix) => {
    // Siempre queremos el submit por separado para poder personalizarlo a futuro.
    console.log(data);

    // ! NOTAS PARA ALEX para mas adelante cuando hagamos las "Thank You" pages.
    // Podemos hacer el tracking desde los eventos de facebook?:
    // TODO Track conversion to 'Mail Extracted' with Facebook Events --> fbq('track', 'Lead Magnet Calc. Form: Mail extracted.');
    // TODO Track conversion to 'Thank You' Page with Facebook Events --> fbq('track', 'Lead Magnet Calc. Form: Qualified/Non-qualified Form Submit'); -- Deberan ser dos eventos, solo ejecutarse uno segun si el lead ha qualificado o no.
    // Is it a qualified lead or a non-qualified?
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitOnValid)}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <FormStepper currentStep={currentStep} totalSteps={steps.length} />
        </Box>
        {renderStep()}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          {currentStep > 0 && (
            <Button onClick={handlePreviousStep}>Anterior</Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNextStep}>Siguiente</Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="submit">Enviar</Button>
          )}
        </Box>
      </form>
    </FormProvider>
  );
}
