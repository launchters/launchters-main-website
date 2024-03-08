import { Button } from "@mui/material";
import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormStepper } from "./Stepper";
import { IFormInput } from "./FormInputTypes";
import { EmailStep } from "./Steps/EmailStep";
import { InstagramStep } from "./Steps/InstagramStep";
import { InstagramViewsStep } from "./Steps/InstagramViewsStep";
import { MinimumIncomeStep } from "./Steps/MinimumIncomeStep";

export default function ProfitCalcGPLeadMagnetForm() {
  const methods = useForm<IFormInput>();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data);
  };

  const steps = ["Email", "Instagram", "Instagram Views", "Minimum Income"];

  const handleNextStep = async (): Promise<void> => {
    const result = await methods.trigger();
    if (result) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      console.log("Por favor, corrige los errores en el formulario antes de continuar");
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = (): JSX.Element | null => {
    switch (currentStep) {
      case 0:
        return <EmailStep onNext={handleNextStep} />;
      case 1:
        return <InstagramStep onNext={handleNextStep} />;
      case 2:
        return <InstagramViewsStep onNext={handleNextStep} />;
      case 3:
        return <MinimumIncomeStep onNext={handleNextStep} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}> 
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormStepper currentStep={currentStep} steps={steps} />
        {renderStep()}
        <div className="form__action-buttons">
          {currentStep > 0 && (
            <Button sx={{ mt: 2 }} onClick={handlePreviousStep}>Anterior</Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button sx={{ mt: 2 }} onClick={handleNextStep}>Siguiente</Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button sx={{ mt: 2 }} type="submit">Enviar</Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}