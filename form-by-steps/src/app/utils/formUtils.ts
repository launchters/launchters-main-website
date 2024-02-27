import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { getRecursiveObjectPropertiesByKeys } from "./parsing";

// -----------------------------------------------------------

export const getFormFieldErrorMessage = (
  fieldKey: string,
  touched: FormikTouched<FormikValues>,
  errors: FormikErrors<FormikValues>
): string | undefined => {
  if (!touched || !errors) return undefined;

  const [fieldTouched, fieldError] = [
    getRecursiveObjectPropertiesByKeys<string>(touched, fieldKey),
    getRecursiveObjectPropertiesByKeys<string>(errors, fieldKey),
  ];

  return (fieldTouched && fieldError) || undefined;
};
