import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import FormStep from "../models/FormStep";
import UseStepsHandlerReturnType from "../models/useHandlerReturnType";

export const useStepsHandler = (
  methods: UseFormReturn<IFormInput>,
  steps: FormStep[],
  applyQualificationCriteria: (stepName: string) => boolean
  // checkQualificationStatus: (setQualifiedStatus) => void
): UseStepsHandlerReturnType => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [qualificationCriteria, setQualificationState] = useState<
    undefined | boolean
  >();

  const checkQualificationState = () => {
    const qualifies = applyQualificationCriteria(steps[currentStep].name);

    if (!qualifies) setQualificationState(false);
    // Last step, if at this point is not disqualified, then is qualified.
    else if (currentStep === steps.length - 1) {
      setQualificationState(true);
    }
  };

  const handleNextStep = async (): Promise<void> => {
    const currentFieldName = steps[currentStep].name;
    const isValid = await methods.trigger(currentFieldName as keyof IFormInput);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    checkQualificationState();
  };

  const handlePreviousStep = (): void => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    currentStep,
    isQualified: qualificationCriteria,
    handleNextStep,
    handlePreviousStep,
  };
};
