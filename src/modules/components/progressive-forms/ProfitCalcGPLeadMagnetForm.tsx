import { useForm } from "react-hook-form";
import {
  AverageExpensesStep,
  AverageHoursStep,
  CurrentMonthlyIncomeStep,
  EmailStep,
  EnglishLevelStep,
  InstagramStep,
  InstagramViewCountStep,
  MinimumIncomeStep,
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
    name: "instagramViewCount",
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
  const methods = useForm<IFormInput>({
    defaultValues: {
      averageHours: 0,
    },
  });
  const stepHookResult = useStepsHandler(methods, steps);
  const currentStep = stepHookResult.currentStep; // Alias only

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitOnValid = async (formData: IFormInput) => {
    // TODO ALEX: Track conversion to 'Thank You' Page with Facebook Events -->
    // fbq('track', 'Lead Magnet Calc. Form: Qualified/Non-qualified Form Submit');
    // -- Deberan ser dos eventos, solo ejecutarse uno segun si el lead ha qualificado o no.

    console.log("Form Submitted:", formData);
  };

  const CurrentStepComponent = steps[currentStep].component;

  const isQualified = stepHookResult.isQualified;

  if (isQualified == undefined) {
    return (
      <StyledFormPageLayout>
        <StyledFormBox
          onSubmit={handleSubmitOnValid}
          {...stepHookResult}
          {...{
            methods,
            steps,
          }}
        >
          <CurrentStepComponent />
        </StyledFormBox>
      </StyledFormPageLayout>
    );
  } else {
    return (
      <StyledFormPageLayout
        children={isQualified ? <YesQualifiedResult /> : <NoQualifiedResult />}
      />
    );
  }
}
