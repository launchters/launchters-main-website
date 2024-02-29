import { $TSFixMeLater } from "@/app/models";
import getFieldPropsCustom from "@/app/utils/getFieldProps";
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
} from "@mui/material";
import { getFormFieldErrorMessage } from "@utils/formUtils";
import _ from "lodash";
import { ObjectSchema } from "yup";
import { Assign, ObjectShape } from "yup/lib/object";

// ---------------

type Props = CheckboxProps & {
  name: string;
  label: string;
  helperText?: string;
  formikBag: $TSFixMeLater;
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null;
};

const FormCheckbox = ({
  name,
  label,
  formikBag,
  validationSchema,
  helperText,
  ...otherCheckboxProps
}: Props) => {
  const { touched, errors } = formikBag;
  const errorMsg = getFormFieldErrorMessage(name, touched, errors);

  const fieldProps: Record<string, any> = _.omit(
    getFieldPropsCustom(
      name,
      formikBag,
      validationSchema,
      true,
      otherCheckboxProps.readOnly
    ),
    "fullWidth",
    "error",
    "helperText"
  );

  return (
    <FormGroup>
      <FormControl error={!!errorMsg}>
        <FormControlLabel
          label={<Typography variant="body1">{label}</Typography>}
          control={
            <Checkbox
              {...fieldProps}
              {...otherCheckboxProps}
              checked={fieldProps.value}
            />
          }
        />
        {!!(errorMsg || helperText) && (
          <FormHelperText component="div">
            <>{errorMsg || helperText}</>
          </FormHelperText>
        )}
      </FormControl>
    </FormGroup>
  );
};
export default FormCheckbox;
