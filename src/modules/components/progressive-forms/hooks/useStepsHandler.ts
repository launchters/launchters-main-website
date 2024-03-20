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

  const checkQualificationStatus = () => {
    const sName = steps[currentStep].name;
    const {
      instagramViewCount,
      currentMonthlyIncome,
      minimumIncome,
      averageHours,
      averageExpenses,
      englishLevel,
    }: IFormInput = methods.getValues();

    if (["instagram", "email"].includes(sName)) {
      // Dato de contacto introducido.
      // TODO ALEX: Track conversion to 'Mail/IG Extracted' with Facebook Events and GAnalytics.
    }

    switch (sName) {
      case "instagramViewCount":
        if (instagramViewCount < 500) {
          // Pocas Views? No cualifica.
          setIsQualified(false);
        }
        break;
      case "monthlyIncome":
        if (currentMonthlyIncome * 5 < minimumIncome) {
          // ingresos actuales actual demasiado alejados del minimo deseado
          setIsQualified(false);
        }
        break;
      case "averageHours":
        if (averageHours < 4 || averageHours > 90) {
          // Dedica muy pocas horas
          setIsQualified(false);
        }
        break;
      case "averageExpenses":
        if (averageExpenses > currentMonthlyIncome * 0.5) {
          // gastos del negocio demasiado altos!
          setIsQualified(false);
        }
        break;
      case "englishLevel":
        if (englishLevel < 5) {
          // Nivel de inglés demasiado bajo
          // ! De momento no aplica
          // setIsQualified(false);
        }
        break;
    }

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
