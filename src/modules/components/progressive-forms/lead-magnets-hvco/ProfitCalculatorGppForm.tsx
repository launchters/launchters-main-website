import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import appConfig from "../../../../config/app.config";
import { $TSFix } from "../../../models/ts-fix.d";
import {
  AverageExpensesStep,
  AverageHoursStep,
  CurrentMonthlyIncomeStep,
  EmailStep,
  EnglishLevelStep,
  InstagramStep,
  InstagramViewCountStep,
  MinimumIncomeStep,
} from "../Steps";
import { useStepsHandler } from "../hooks/useStepsHandler";
import { IFormInput } from "../models/FormInputTypes";
import FormStep from "../models/FormStep";
import NoQualifiedResult from "../partials/NoQualifiedResult";
import SubmittedAlreadyResult from "../partials/SubmittedAlreadyResult";
import YesQualifiedResult from "../partials/YesQualifiedResult";
import StyledFormPageLayout from "../styled-components/StyledFormPageLayout";
import StyledProgressiveFormBox from "../styled-components/StyledProgressiveFormBox";

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

export default function ProfitCalculatorGppForm() {
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

  const handleLeadContactResponse = (data: $TSFix) => {
    console.log("API Response:", data);
    // TODO ALEX: Track conversion events with Facebook Events and GAnalytics.
    // -- -- to 'Contact Extracted - Email'.
    // -- -- to 'Contact Extracted - Instagram'.

    // Comprobar si el usuario ya estaba registrado en la BBDD. Si no lo está, registrarlo,
    // si sí lo está, enviarlo a página de "formulario ya enviado anteriormente.".
    const yaEstabaEnLaBBDD = true;
    if (yaEstabaEnLaBBDD) {
      setSubmittedAlreadyState(true);
      setSubmittedCookie();
    }
  };

  const handleApiError = (err: $TSFix) => {
    console.log(err.message);
  };

  const saveFormInfoOnChange = () => {
    // TODO ALEX: Modificar esta request cuando el webhook esté listo, por ahora la url es fake
    const formData = methods.getValues();
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then(handleLeadContactResponse)
      .catch(handleApiError);
  };

  const applyQualificationCriteria = (stepName: string) => {
    const {
      instagramViewCount,
      currentMonthlyIncome,
      minimumIncome,
      // englishLevel,
      // averageExpenses,
      averageHours,
    }: IFormInput = methods.getValues();

    switch (stepName) {
      case "instagramViewCount":
        if (instagramViewCount < 800) {
          // Pocas Views? No cualifica.
          return false;
        }
        break;
      case "monthlyIncome":
        if (minimumIncome > 7 * currentMonthlyIncome) {
          // Mínimo nivel de ingresos deseado demasiado alto para el nivel de ingresos actuales = EXPECTATIVAS IRREALISTAS.
          return false;
        }
        break;
      case "averageHours":
        if (averageHours < 2 || averageHours > 60) {
          // Dedica muy pocas horas o es muy poco productivo diciendo que dedica muchas.
          return false;
        }
        break;
      // ! ----- QUALIFICATION STEP IGNORADA temporalmente.
      // case "averageExpenses":
      // //   if (averageExpenses > currentMonthlyIncome * 0.7) {
      // //     // Gastos del negocio demasiado altos!
      // //     return false;
      // //   }
      // //   break;
      // ! ----- QUALIFICATION STEP IGNORADA temporalmente.
      // // case "englishLevel":
      // //   if (englishLevel < 5) {
      // //     // Nivel de inglés demasiado bajo
      // //     // return false;
      // //   }
      //   break;
    }

    return true;
  };

  const handleFormStepChange = (stepName: string) => {
    saveFormInfoOnChange(); // async. Non-blocking
    return applyQualificationCriteria(stepName);
  };

  const stepHookResult = useStepsHandler(
    methods,
    steps,
    handleFormStepChange,
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
