import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import FormStep from "../models/FormStep";
import UseStepsHandlerReturnType from "../models/useHandlerReturnType";

export const useStepsHandler = (
  methods: UseFormReturn<IFormInput>,
  steps: FormStep[]
): UseStepsHandlerReturnType => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNextStep = async (): Promise<void> => {
    const currentFieldName = steps[currentStep].name;
    const isValid = await methods.trigger(currentFieldName as keyof IFormInput);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = (): void => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    currentStep,
    handleNextStep,
    handlePreviousStep,
  };
};
