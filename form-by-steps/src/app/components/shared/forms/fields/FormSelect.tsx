import AppConfig from "@/app/App.config";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
  Stack,
} from "@mui/material";
import { getFormFieldErrorMessage } from "@utils/formUtils";
import {
  FormikContextType,
  FormikErrors,
  FormikTouched,
  FormikValues,
  useFormikContext,
} from "formik";
import { ReactElement } from "react";

type Props = Partial<SelectProps> & {
  name: string;
  tabIndex?: number;
  label: string;
  helperText?: string;
  children: ReactElement[];
  readOnly?: boolean;
};
const FormSelect = ({
  name,
  label,
  tabIndex = 1,
  helperText,
  children,
  readOnly = false,
  ...selectProps
}: Props) => {
  const {
    errors,
    touched,
    getFieldProps,
    values,
  }: FormikContextType<FormikValues> & {
    errors: FormikErrors<FormikValues>;
    touched: FormikTouched<FormikValues>;
  } = useFormikContext();
  const labelId = `${name}-label`;

  // ------

  const errorMsg = getFormFieldErrorMessage(name, touched, errors);

  return (
    <Stack style={{ display: "flex", width: "100%", flex: 1 }}>
      <FormControl
        variant={AppConfig.formFieldsVariant}
        tabIndex={tabIndex}
        fullWidth
        error={!!errorMsg}
        sx={{ minWidth: 260 }}
      >
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          id={name}
          {...getFieldProps(name)}
          {...{ name, labelId, label, ...selectProps }}
          defaultValue={values[name] || ""}
          readOnly={readOnly}
        >
          {/* Special case for 'none' */}
          <MenuItem value="">
            <em>Ninguna</em>
          </MenuItem>
          {children}
        </Select>

        {(errorMsg || helperText) && (
          <FormHelperText component="div">
            <>{errorMsg || helperText}</>
          </FormHelperText>
        )}
      </FormControl>
    </Stack>
  );
};
export default FormSelect;
