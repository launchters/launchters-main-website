import { TextFieldProps } from "@mui/material";
import ObjectSchema, { Assign, ObjectShape } from "yup/lib/object";
import AppConfig from "../App.config";
import styles from "../components/styles/DetailsPage.styles";
import { $TSFixMeLater, FormikBagProps } from "../models";
import { getFormFieldErrorMessage } from "./formUtils";

// -------------------

export function isRequiredField(
  name: string,
  schema: ObjectSchema<Assign<ObjectShape, any>> | null
) {
  return (
    (schema &&
      schema.fields &&
      schema.fields[name] &&
      schema.fields[name].exclusiveTests.required) ||
    false
  );
}

const getFieldPropsCustom = (
  name: string,
  formikBag: FormikBagProps<$TSFixMeLater>,
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null,
  includeHelperText: boolean = true,
  isReadOnly: boolean = false
) => {
  const { getFieldProps, errors, touched } = formikBag;

  const errorMsg =
    (includeHelperText && getFormFieldErrorMessage(name, touched, errors)) ||
    "";

  return {
    ...getFieldProps(name),
    id: name,
    fullWidth: true,
    variant: AppConfig.formFieldsVariant,
    sx: styles.formInputField,
    readOnly: isReadOnly,
    required: isRequiredField(name, validationSchema),
    ...(includeHelperText
      ? {
          error: !!errorMsg,
          helperText: errorMsg,
        }
      : {}),
  };
};

export const getTextFieldProps = (
  name: string,
  formikBag: $TSFixMeLater,
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null,
  isReadOnly: boolean
): TextFieldProps => ({
  ...getFieldPropsCustom(name, formikBag, validationSchema, true),
  InputProps: {
    readOnly: isReadOnly,
    required: isRequiredField(name, validationSchema),
  },
});

export default getFieldPropsCustom;
