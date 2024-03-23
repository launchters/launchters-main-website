import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import appConfig from "../../../config/app.config";
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
import SubmittedAlreadyResult from "./partials/SubmittedAlreadyResult";
import YesQualifiedResult from "./partials/YesQualifiedResult";
import StyledFormPageLayout from "./styled-components/StyledFormPageLayout";
import StyledProgressiveFormBox from "./styled-components/StyledProgressiveFormBox";

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
  const formName: string = "gpp-profit-calc";
  const [submittedAlreadyState, setSubmittedAlreadyState] =
    useState<boolean>(false);
  const methods = useForm<IFormInput>({
    defaultValues: {
      averageHours: 0,
      averageExpenses: 0,
    },
  });

  const getSubmittedFormCookie = () => {
    const obj = JSON.parse(
      localStorage.getItem(appConfig.cookies.types.submittedForms) ?? "{}"
    );
    return obj[formName];
  };

  const setSubmittedCookie = () => {
    if (!getSubmittedFormCookie()) {
      localStorage.setItem(
        appConfig.cookies.types.submittedForms,
        JSON.stringify({
          ...JSON.parse(
            localStorage.getItem(appConfig.cookies.types.submittedForms) ?? "{}"
          ),
          [formName]: new Date().toISOString(),
        })
      );
    }
  };

  const applyQualificationCriteria = (stepName: string) => {
    const {
      instagramViewCount,
      currentMonthlyIncome,
      minimumIncome,
      averageHours,
      // englishLevel,
      averageExpenses,
    }: IFormInput = methods.getValues();

    // eslint-disable-next-line prefer-const
    let resultadoDeComprobarSiYaHaSidoRegistradoElUsuario = false;

    switch (stepName) {
      case "email":
        // TODO Enviar una http request para comprobar si el email está ya en nuestra base de datos. y si no lo está guardarlo inmediatamente.
        // TODO If is already in the database, setAlreadySubmitState to true
        // TODO ALEX: Track conversion to 'Contact Extracted - Email' with Facebook Events and GAnalytics.
        if (resultadoDeComprobarSiYaHaSidoRegistradoElUsuario) {
          setSubmittedAlreadyState(true);
          setSubmittedCookie();
        }
        break;
      case "instagram":
        // TODO Enviar una http request para comprobar si el usuario de instagram está ya en nuestra base de datos y si no lo está guardarlo inmediatamente.
        // TODO If is already in the database, setAlreadySubmitState to true
        // TODO ALEX: Track conversion to 'Contact Extracted - Instagram' with Facebook Events and GAnalytics.
        if (resultadoDeComprobarSiYaHaSidoRegistradoElUsuario) {
          setSubmittedAlreadyState(true);
          setSubmittedCookie();
        }
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
    applyQualificationCriteria,
    setSubmittedCookie
  );
  const currentStep = stepHookResult.currentStep; // Alias only

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitOnValid = async (formData: IFormInput) => {
    // TODO ALEX: Track conversion to 'Thank You' Page with Facebook Events -->
    // fbq('track', 'Lead Magnet Calc. Form: Qualified/Non-qualified Form Submit');
    // -- Deberan ser dos eventos, solo ejecutarse uno segun si el lead ha qualificado o no.

    console.log("Form Submitted:", formData);
    setSubmittedCookie();
  };

  const CurrentStepComponent = steps[currentStep].component;

  const isQualified = stepHookResult.isQualified;

  useEffect(() => {
    if (isQualified == undefined) {
      const subForms = JSON.parse(
        localStorage.getItem(appConfig.cookies.types.submittedForms) ?? "{}"
      );
      if (subForms[formName]) setSubmittedAlreadyState(true);
    }
  }, [currentStep, isQualified]);

  if (submittedAlreadyState) {
    return <StyledFormPageLayout children={<SubmittedAlreadyResult />} />;
  }

  if (isQualified != undefined) {
    return (
      <StyledFormPageLayout
        children={isQualified ? <YesQualifiedResult /> : <NoQualifiedResult />}
      />
    );
  }
  return (
    <StyledFormPageLayout>
      <StyledProgressiveFormBox
        onSubmit={handleSubmitOnValid}
        {...stepHookResult}
        {...{
          submittedAlreadyState,
          methods,
          steps,
        }}
      >
        <CurrentStepComponent />
      </StyledProgressiveFormBox>
    </StyledFormPageLayout>
  );
}
