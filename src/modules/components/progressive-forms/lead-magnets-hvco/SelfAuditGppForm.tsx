import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import appConfig from "../../../../config/app.config";
import { $TSFix } from "../../../models/ts-fix.d";
import applyQualificationCriteria from "../helpers/apply-qualification-criteria.fn";
import handleApiResponseError from "../helpers/handle-api-response-error.fn";
import { setSubmittedFormCookie } from "../helpers/submitted-form-cookie.fns";
import { useStepsHandler } from "../hooks/useStepsHandler";
import { IFormInput } from "../models/FormInputTypes";
import FormStep from "../models/FormStep";
import NoQualifiedResult from "../partials/NoQualifiedResult";
import SubmittedAlreadyResult from "../partials/SubmittedAlreadyResult";
import YesQualifiedResult from "../partials/YesQualifiedResult";
import StyledFormPageLayout from "../styled-components/StyledFormPageLayout";
import StyledProgressiveFormBox from "../styled-components/StyledProgressiveFormBox";

type IFormName = keyof typeof appConfig.services.gpp.formSteps;

export default function SelfAuditGppForm() {
  const formName: IFormName = "gpp-self-audit";
  const steps: FormStep[] = appConfig.services.gpp.formSteps[formName];

  const [submittedAlreadyState, setSubmittedAlreadyState] =
    useState<boolean>(false);
  const methods = useForm<IFormInput>({
    defaultValues: {},
  });

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
      setSubmittedFormCookie(formName);
    }
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
      .catch(handleApiResponseError);
  };

  const handleFormStepChange = (stepName: string) => {
    saveFormInfoOnChange(); // async. Non-blocking
    return applyQualificationCriteria(stepName, methods.getValues());
  };

  const stepHookResult = useStepsHandler(
    methods,
    steps,
    handleFormStepChange,
    () => setSubmittedFormCookie(formName)
  );
  const currentStep = stepHookResult.currentStep; // Alias only

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitOnValid = async (formData: IFormInput) => {
    // TODO ALEX: Track conversion to 'Thank You' Page with Facebook Events -->
    // fbq('track', 'Lead Magnet Calc. Form: Qualified/Non-qualified Form Submit');
    // -- Deberan ser dos eventos, solo ejecutarse uno segun si el lead ha qualificado o no.

    console.log("Form Submitted:", formData);
    setSubmittedFormCookie(formName);
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
