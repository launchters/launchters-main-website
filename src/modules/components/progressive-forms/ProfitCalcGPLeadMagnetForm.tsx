import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AverageHoursStep,
  CurrentMonthlyIncomeStep,
  EmailStep,
  EnglishLevelStep,
  InstagramStep,
  InstagramViewCountStep,
  MinimumIncomeStep,
  AverageExpensesStep,
} from "./Steps";
import { useStepsHandler } from "./hooks/useStepsHandler";
import { IFormInput } from "./models/FormInputTypes";
import FormStep from "./models/FormStep";
import NoQualifiedResult from "./partials/NoQualifiedResult";
import YesQualifiedResult from "./partials/YesQualifiedResult";
import StyledFormBox from "./styled-components/StyledFormBox";
import StyledFormPageLayout from "./styled-components/StyledFormPageLayout";

const steps: FormStep[] = [
  { title: "Instagram", component: InstagramStep, name: "instagram" },
  { title: "Email", component: EmailStep, name: "email" },
  {
    title: "Instagram Views",
    component: InstagramViewCountStep,
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
    name: "currentMonthlyIncome",
  },
  { title: "Average Hours", component: AverageHoursStep, name: "averageHours" },
  {
    title: "Average Expenses",
    component: AverageExpensesStep,
    name: "averageExpenses",
  },
  {
    title: "English Level",
    component: EnglishLevelStep,
    name: "englishLevel",
  },
];

export default function ProfitCalcGPLeadMagnetForm() {
  const methods = useForm<IFormInput>();
  const stepHookResult = useStepsHandler(methods, steps);
  const [isQualifiedLead, setIsQualifiedLead] = useState<undefined | boolean>();
  const currentStep = stepHookResult.currentStep; // Alias only

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
        if (formData.currentMonthlyIncome * 5 < formData.minimumIncome) {
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

  const CurrentStepComponent = steps[currentStep].component;

  if (isQualifiedLead != undefined) {
    if (isQualifiedLead) {
      return <StyledFormPageLayout children={<YesQualifiedResult />} />;
    } else {
      return <StyledFormPageLayout children={<NoQualifiedResult />} />;
    }
  } else {
    return (
      <StyledFormPageLayout>
        <StyledFormBox
          {...stepHookResult}
          {...{
            methods,
            steps,
            handleSubmitOnValid,
          }}
        >
          <CurrentStepComponent />
        </StyledFormBox>
      </StyledFormPageLayout>
    );
  }
}
