import appConfig from "../../../../config/app.config";

export const getSubmittedFormCookie = (formName: string) => {
  const obj = JSON.parse(
    localStorage.getItem(appConfig.cookies.types.submittedForms) ?? "{}"
  );
  return obj[formName];
};

export const setSubmittedFormCookie = (formName: string) => {
  if (!getSubmittedFormCookie(formName)) {
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
