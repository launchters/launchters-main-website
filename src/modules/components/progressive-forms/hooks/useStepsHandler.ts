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
  const [isQualified, setIsQualified] = useState<undefined | boolean>();

  const formData: IFormInput = { ...methods.getValues() };

  const checkQualificationStatus = () => {
    const sName = steps[currentStep].name;

    if (["instagram", "email"].includes(sName)) {
      // Dato de contacto introducido.
      // TODO ALEX: Track conversion to 'Mail/IG Extracted' with Facebook Events and GAnalytics.
    }

    switch (sName) {
      case "instagramViewCount":
        if (formData.instagramViewCount < 500) {
          // Pocas Views? No cualifica.
          setIsQualified(false);
        }
        break;
      case "monthlyIncome":
        if (formData.currentMonthlyIncome * 5 < formData.minimumIncome) {
          // monthly Income actual demasiado alejado del deseado minimo
          setIsQualified(false);
        }
        break;
      case "averageHours":
        if (formData.averageHours < 8) {
          // monthly Income actual demasiado alejado del deseado minimo
          setIsQualified(false);
        }
        break;
      case "averageExpenses":
        if (formData.averageExpenses > 10000) {
          // monthly Income actual demasiado alejado del deseado minimo
          setIsQualified(false);
        }
        break;
      case "englishLevel":
        if (formData.englishLevel < 5) {
          setIsQualified(false);
        }
        break;
    }

    console.log({ formData, sName, isQualified });
    // Last step, if at this point is not disqualified, then is qualified
    if (currentStep === steps.length - 1 && isQualified !== false) {
      setIsQualified(true);
    }
  };

  const handleNextStep = async (): Promise<void> => {
    const currentFieldName = steps[currentStep].name;
    const isValid = await methods.trigger(currentFieldName as keyof IFormInput);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }

    checkQualificationStatus();
  };

  const handlePreviousStep = (): void => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return {
    currentStep,
    isQualified,
    handleNextStep,
    handlePreviousStep,
  };
};
