import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { FormStepper } from "./FormStepper";
import { IFormInput } from "./FormInputTypes";
import { EmailStep } from "./Steps/EmailStep";
import { InstagramStep } from "./Steps/InstagramStep";
import { InstagramViewsStep } from "./Steps/InstagramViewsStep";
import { MinimumIncomeStep } from "./Steps/MinimumIncomeStep";
import { MonthlyIncomeStep } from "./Steps/MonthlyIncomeStep";
import { useStepsHandler } from './stepsHandler';

interface Step<P extends Partial<IFormInput>> {
  title: string;
  component: React.FC<P>;
}

// ! Nota: No consigo solucionar el aviso de component. He creado un FormInputTypes.ts con la interfaz IFormInput y lo he importado en este archivo, pero no consigo solucionar el aviso.

const steps: Array<Step<Partial<IFormInput>>> = [
  { title: "Email", component: EmailStep },
  { title: "Instagram", component: InstagramStep },
  { title: "Instagram Views", component: InstagramViewsStep },
  { title: "Minimum Income", component: MinimumIncomeStep },
  { title: "Monthly Income", component: MonthlyIncomeStep },
];

export default function ProfitCalcGPLeadMagnetForm() {
  const methods = useForm<IFormInput>();
  const { currentStep, handleNextStep, handlePreviousStep } = useStepsHandler(steps.length);

  const renderStep = (): JSX.Element => {
    const StepComponent = steps[currentStep].component;
    const stepProps = {
      ...methods.getValues(),
      onNext: handleNextStep, 
    };
    return <StepComponent {...stepProps} />;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <FormStepper currentStep={currentStep} totalSteps={steps.length} />
        </Box>
        {renderStep()}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {currentStep > 0 && (
            <Button onClick={handlePreviousStep}>
              Anterior
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNextStep}>
              Siguiente
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="submit">
              Enviar
            </Button>
          )}
        </Box>
      </form>
    </FormProvider>
  );
}

