import AppConfig from "@/app/App.config";
import { getFormFieldErrorMessage } from "@/app/utils/formUtils";
import { DateTimePickerProps } from "@mui/lab";
import {
  FormControl,
  FormHelperText,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { esES } from "@mui/x-date-pickers/locales";
import { FieldInputProps, useFormikContext } from "formik";
import moment from "moment-timezone";

// ----------------------------------------------------------------------

type Props = FieldInputProps<any> &
  DateTimePickerProps<Date> & {
    pickerVariant?: "datetime" | "date";
    label: string;
    helperText?: string;
  };

// ------------------------------------------------------------------

export const DATE_FORMAT = "dd/MM/yyyy";
export const DATETIME_FORMAT = "dd/MM/yyyy HH:mm";

function DateTimePickerLocalisedControl({
  pickerVariant = "date",
  label,
  name,
  formikBag = null,
  readOnly = false,
  required = false,
  helperText = "",
  ...props
}: Props) {
  const valueWhenBlank = "";
  const formatter = pickerVariant === "date" ? DATE_FORMAT : DATETIME_FORMAT;

  const { setFieldValue, values, touched, errors, setFieldTouched } =
    useFormikContext();
  const errorMsg = getFormFieldErrorMessage(name, touched, errors);
  const mergedSx = {
    width: "90vw",
    maxWidth: "100%",
    minWidth: props.disabled ? "12em" : "15em",
    display: "flex",
    mt: -1,
    error: !!errorMsg,

    ...props.sx,
  };
  const error = (errors as Record<string, unknown>)[name];
  const handleChange = (newDt: Date | null) => {
    const newDtParsed =
      (newDt &&
        moment(newDt).isValid() &&
        moment(newDt).tz(AppConfig.timeZone, true).toDate()) ||
      valueWhenBlank;

    if (pickerVariant === "date" && newDtParsed) newDtParsed.setHours(0);

    setFieldTouched(name, true, false);
    setFieldValue(name, newDtParsed, true);
  };

  // ----------------

  const renderField = (params: TextFieldProps) => (
    <TextField
      {...{ ...params, label }}
      variant={AppConfig.formFieldsVariant}
      id={name}
      error={!!error}
      value={(values as Record<string, string>)[name] || ""}
      sx={mergedSx}
      fullWidth
    />
  );

  // ------------

  const mergedProps = {
    ...props,
    key: name,
    label: label,
    inputFormat: formatter,
    minutesStep: 15,
    locale: esES,
    localeText: "ES-es", // BCP 47 language tag as per https://mui.com/x/react-date-pickers/localization/
    onChange: handleChange,
    renderInput: renderField,
    ampm: false,
    readOnly: !!readOnly,
    InputProps: { required: required },
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={AppConfig.datePickersAdapterLocale}
      localeText={
        esES.components.MuiLocalizationProvider.defaultProps.localeText
      }>
      <FormControl id={`${label}-ctrl`} error={!!error} sx={{ mt: 1 }}>
        {pickerVariant === "date" ? (
          <DatePicker {...mergedProps} />
        ) : (
          <DateTimePicker {...mergedProps} />
        )}
        {!!(errorMsg || helperText) && (
          <FormHelperText component="div">
            <>{errorMsg || helperText}</>
          </FormHelperText>
        )}
      </FormControl>
    </LocalizationProvider>
  );
}

export default DateTimePickerLocalisedControl;
