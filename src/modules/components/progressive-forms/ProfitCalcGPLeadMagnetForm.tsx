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

  const applyQualificationCriteria = (stepName: string) => {
    const {
      instagramViewCount,
      currentMonthlyIncome,
      minimumIncome,
      averageHours,
      // englishLevel,
      averageExpenses,
    }: IFormInput = methods.getValues();

    switch (stepName) {
      case "email":
        // TODO Enviar una http request para comprobar si el email está ya en nuestra base de datos. y si no lo está guardarlo inmediatamente.
        // TODO If is already in the database, setAlreadySubmitState to true
        // TODO ALEX: Track conversion to 'Contact Extracted - Email' with Facebook Events and GAnalytics.
        break;
      case "instagram":
        // TODO Enviar una http request para comprobar si el usuario de instagram está ya en nuestra base de datos y si no lo está guardarlo inmediatamente.
        // TODO If is already in the database, setAlreadySubmitState to true
        // TODO ALEX: Track conversion to 'Contact Extracted - Instagram' with Facebook Events and GAnalytics.
        break;
      case "instagramViewCount":
        if (instagramViewCount < 500) {
          // Pocas Views? No cualifica.
          return false;
        }
        break;
      case "monthlyIncome":
        if (currentMonthlyIncome * 5 < minimumIncome) {
          // ingresos actuales actual demasiado alejados del minimo deseado
          return false;
        }
        break;
      case "averageHours":
        if (averageHours < 4 || averageHours > 90) {
          // Dedica muy pocas horas
          return false;
        }
        break;
      case "averageExpenses":
        if (averageExpenses > currentMonthlyIncome * 0.5) {
          // gastos del negocio demasiado altos!
          return false;
        }
        break;
      // ! De momento no aplica
      // case "englishLevel":
      //   if (englishLevel < 5) {
      //     // Nivel de inglés demasiado bajo
      //     // return false;
      //   }
      //   break;
    }

    return true;
  };

  const stepHookResult = useStepsHandler(
    methods,
    steps,
    applyQualificationCriteria
  );
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
