import { $TSFixMeLater } from "@/app/models";
import { Euro } from "@mui/icons-material";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { getTextFieldProps, isRequiredField } from "@utils/getFieldProps";
import { ObjectSchema } from "yup";
import { Assign, ObjectShape } from "yup/lib/object";

// -----------

type Props = TextFieldProps & {
  formikBag: $TSFixMeLater;
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null;
  readOnly?: boolean;
  name: string;
  label: string;
};

export default function FormMoneyInput({
  formikBag,
  validationSchema,
  readOnly = false,
  disabled = false,
  name,
  label,
  ...otherTextFieldProps
}: Props) {
  const fieldProps = getTextFieldProps(
    name,
    formikBag,
    validationSchema,
    readOnly
  );

  return (
    <TextField
      {...{ ...fieldProps, label, disabled, ...otherTextFieldProps }}
      type="decimal"
      InputProps={{
        readOnly: !!readOnly,
        required: isRequiredField(name, validationSchema),
        endAdornment: (
          <InputAdornment
            position="start"
            sx={{
              m: 0,
              ml: 1,
            }}>
            <Euro style={{ opacity: 0.618 }} />
          </InputAdornment>
        ),
        type: "number",
        inputMode: "decimal",
      }}
      inputProps={{
        required: isRequiredField(name, validationSchema),
        pattern: "[0-9]*.[0-9][0-9]",
        step: 0.01,
      }}
      error={fieldProps.error}
      helperText={fieldProps.helperText}
    />
  );
}
