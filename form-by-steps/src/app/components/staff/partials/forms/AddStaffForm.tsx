import DateTimePickerLocalisedControl from "@components/shared/forms/fields/DateTimePickerLocalisedControl";
import FormMoneyInput from "@components/shared/forms/fields/FormMoneyInput";
import SubmitButtonWithSavingState from "@components/shared/forms/partials/SubmitButtonWithSavingState";
import styles from "@components/styles/DetailsPage.styles";
import { $TSFixMeLater, FormikBagProps, StaffWorker } from "@models/index";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  TextField,
} from "@mui/material";
import NotificationsService from "@services/NotificationsService";
import StaffWorkerService from "@services/StaffWorkerService";
import { getFormFieldErrorMessage } from "@utils/formUtils";
import getFieldPropsCustom, { getTextFieldProps } from "@utils/getFieldProps";
import preventFormSubmitOnEnter from "@utils/prevent-form-submit-on-enter";
import { addStaffFormValidationSchema } from "@utils/validation/validationSchemas";
import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { max } from "lodash";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObjectSchema } from "yup";
import { Assign, ObjectShape } from "yup/lib/object";

// -----------------------------------------------------

export const generateFormFields = (
  formikBag: $TSFixMeLater,
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null,
  {
    includeSystemFields = false,
    editModeEnabled = true,
  }: { includeSystemFields: boolean; editModeEnabled: boolean }
) => {
  const { setFieldValue, touched, errors } = formikBag;

  return {
    firstName: (
      <TextField
        {...getTextFieldProps(
          "firstName",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Nombre"
        placeholder="Antonio"
        tabIndex={0}
      />
    ),
    lastName: (
      <TextField
        {...getTextFieldProps(
          "lastName",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Apellidos"
        placeholder="Garcia Rodríguez"
        inputMode="text"
        tabIndex={1}
      />
    ),
    personalID: (
      <TextField
        {...getTextFieldProps(
          "personalID",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="DNI o NIE"
        placeholder="12345678Z"
        inputMode="text"
        inputProps={{ minLength: 8, maxLength: 10 }}
        helperText={
          "Introduce DNI o NIE sin guiones ni espacios y en mayusculas. Ejemplo: 12345678Z"
        }
        tabIndex={2}
        // Enforce UPPERCASE
        onChange={(e) =>
          setFieldValue("personalID", e.target.value.toUpperCase())
        }
      />
    ),
    email: (
      <TextField
        {...getTextFieldProps(
          "email",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Email"
        type="email"
        inputMode="email"
        placeholder="nombre.apellidos@empresa.com"
        helperText={
          getFormFieldErrorMessage("phoneNumber", touched, errors) ??
          "Preferiblemente el email de empresa/trabajo. Debe ser capaz de recibir emails correctamente."
        }
        tabIndex={3}
      />
    ),
    phoneNumber: (
      <TextField
        {...getTextFieldProps(
          "phoneNumber",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Núm. de teléfono"
        type="tel"
        inputMode="tel"
        placeholder="647111111"
        tabIndex={4}
      />
    ),
    postalAddress: (
      <TextField
        {...getTextFieldProps(
          "postalAddress",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Dirección postal"
        placeholder="Calle de Alcalá, 5"
        helperText={
          getFormFieldErrorMessage("postalAddress", touched, errors) ??
          "Especifica la dirección completa: Calle, Número de Portal, Puerta"
        }
        tabIndex={5}
      />
    ),
    annualSalary: (
      <FormMoneyInput
        {...{ formikBag, validationSchema }}
        readOnly={!editModeEnabled}
        name="annualSalary"
        label="Salario bruto anual (EUR)"
        placeholder="21000"
      />
    ),
    nhsNumber: (
      <TextField
        {...getTextFieldProps(
          "nhsNumber",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        type="text"
        inputMode="text"
        label="Núm. Afiliación a la Seg. Social"
        tabIndex={7}
      />
    ),
    postCode: (
      <TextField
        {...getTextFieldProps(
          "postCode",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        type="text"
        inputMode="text"
        label="Código Postal"
        placeholder="36002"
        tabIndex={8}
      />
    ),
    town: (
      <TextField
        {...getTextFieldProps(
          "town",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Población"
        placeholder="Alcalá de Henares"
        tabIndex={9}
      />
    ),
    district: (
      <TextField
        {...getTextFieldProps(
          "district",
          formikBag,
          validationSchema,
          !editModeEnabled
        )}
        label="Provincia"
        placeholder="Madrid"
        tabIndex={10}
      />
    ),
    startDate: (
      <DateTimePickerLocalisedControl
        pickerVariant="date"
        {...getFieldPropsCustom(
          "startDate",
          formikBag,
          validationSchema,
          true,
          !editModeEnabled
        )}
        label="Fecha de inicio"
        tabIndex={11}
      />
    ),
  };
};

export const formInitialValues: StaffWorker<Date> = {
  firstName: "",
  lastName: "",
  personalID: "",
  email: "",
  phoneNumber: "",
  postalAddress: "",
  postCode: "",
  town: "",
  district: "",
  startDate: new Date(),
  nhsNumber: "",
  annualSalary: 0.0,
};

function AddStaffForm() {
  const [displayStep, setDisplayStep] = useState<number>(0);
  const navigate = useNavigate();
  const handleNextStepClick = (e: any) => setDisplayStep((state) => state + 1);
  const handlePreviousStepClick = (e: any) =>
    setDisplayStep((state) => state - 1);

  // ----------------

  const onSubmitSuccess = (): void => {
    // RESET FORM
    resetFormValues();
    setDisplayStep(0);

    // Redirect to the table:
    navigate("/staff");

    // Show snackbar confirmation or Alert
    NotificationsService.generateSnackbarAlert(
      "Trabajador agregado correctamente",
      "success"
    );
  };

  const onSubmitError = (): void => {
    NotificationsService.generateSnackbarAlert(
      "Error al agregar un nuevo trabajador",
      "error"
    );
  };

  const resetFormValues = () => {
    formikBag.resetForm();
  };

  // 👀 Using SYNC syntax intentionally to preserve the default behaviour of the submit button related to "isSubmitting" state updates from formikBag
  const handleFormSubmit = (
    _: any, // ignore this line
    _formikHelpers: FormikHelpers<StaffWorker<Date>>
  ): void => {
    try {
      StaffWorkerService.createOne(values).then((saved) =>
        !!saved ? onSubmitSuccess() : onSubmitError()
      );
    } catch (err) {
      NotificationsService.displayErrorSaving();
      if (process.env.NODE_ENV === "development") console.error(err);
    }
  };

  const validationSchema = addStaffFormValidationSchema;
  const formikBag = useFormik<StaffWorker<Date>>({
    initialValues: formInitialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
    // Submit disabled by default if user does not enters a value
    validateOnMount: false,
  });

  const {
    errors,
    touched,
    handleSubmit,
    isValid,
    dirty,
    values,
  }: FormikBagProps<StaffWorker<Date>> = formikBag;

  const formFieldDisplayStep = {
    firstName: 0,
    lastName: 0,
    personalID: 0,
    email: 1,
    phoneNumber: 1,
    postalAddress: 2,
    postCode: 2,
    town: 2,
    district: 2,
    startDate: 3,
    nhsNumber: 3,
    annualSalary: 3,
  };

  const lastStep: number = max(Object.values(formFieldDisplayStep)) || 0;
  const isFormFieldDisplayedInThisStep = (formFieldId: string): boolean =>
    (formFieldDisplayStep as any)[formFieldId] === displayStep;
  const currentlyDisplayedFields = Object.keys(formFieldDisplayStep).filter(
    (k) => (formFieldDisplayStep as any)[k] === displayStep
  );

  const keysValidIfPristineWithDefaultValue: string[] = [
    "lastName",
    "personalID",
    "email",
    "phoneNumber",
    "postalAddress",
    "postCode",
    "town",
    "district",
    "startDate",
    "nhsNumber",
    "annualSalary",
  ];

  const isNextButtonDisabled = !currentlyDisplayedFields
    .filter((k) => !keysValidIfPristineWithDefaultValue.includes(k))
    .every((k) => (touched as any)[k] && !(errors as any)[k]);

  const isSubmitButtonDisabled = isNextButtonDisabled || !dirty || !isValid;

  // --------------------

  const formFields = {
    ...generateFormFields(formikBag, validationSchema, {
      includeSystemFields: false,
      editModeEnabled: true,
    }),
    previousStepButton: (
      <Button
        style={{ textTransform: "none" }}
        size="large"
        color="primary"
        variant="outlined"
        onClick={handlePreviousStepClick}
        fullWidth
        sx={{ minWidth: "8em", m: 0, p: 0 }}>
        Volver
      </Button>
    ),
    nextStepButton: (
      <Button
        style={{ textTransform: "none" }}
        size="large"
        color="secondary"
        variant="contained"
        onClick={handleNextStepClick}
        disabled={isNextButtonDisabled}
        fullWidth
        sx={{ minWidth: "8em", m: 0, p: 0 }}>
        Siguiente
      </Button>
    ),
    submitButton: (
      <SubmitButtonWithSavingState
        displayText="AGREGAR TRABAJADOR"
        disabled={isSubmitButtonDisabled}
        sx={{ minWidth: "14em" }}
        fullWidth
        tabIndex={Object.keys(formFieldDisplayStep).length + 1}
      />
    ),
  };

  // ----------------

  const gridContainerProps = {
    display: "flex",
    spacing: 2,
    sx: styles.gridContainerInsideCard,
  };
  const gridItemProps = {
    display: "flex",
    flex: 1,
    mt: 1,
    mb: 1,
  };

  return (
    <FormikProvider value={formikBag}>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit}
        onKeyDown={preventFormSubmitOnEnter}>
        <Card sx={styles.card}>
          <CardContent sx={{ ...styles.cardContent, minHeight: 325 }}>
            <Grid container {...gridContainerProps}>
              {isFormFieldDisplayedInThisStep("firstName") && (
                <Grid item {...gridItemProps} xs={12} md={4}>
                  {formFields.firstName}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("lastName") && (
                <Grid item {...gridItemProps} xs={12} md={4}>
                  {formFields.lastName}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("personalID") && (
                <Grid item {...gridItemProps} xs={12} md={4}>
                  {formFields.personalID}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("email") && (
                <Grid item {...gridItemProps} xs={12} md={8}>
                  {formFields.email}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("phoneNumber") && (
                <Grid item {...gridItemProps} xs={12} md={4}>
                  {formFields.phoneNumber}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("postalAddress") && (
                <Grid item {...gridItemProps} xs={12} md={9}>
                  {formFields.postalAddress}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("postCode") && (
                <Grid item {...gridItemProps} xs={12} md={3}>
                  {formFields.postCode}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("town") && (
                <Grid item {...gridItemProps} xs={12} md={6}>
                  {formFields.town}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("district") && (
                <Grid item {...gridItemProps} xs={12} md={6}>
                  {formFields.district}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("annualSalary") && (
                <Grid item {...gridItemProps} xs={12} md={6}>
                  {formFields.annualSalary}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("nhsNumber") && (
                <Grid item {...gridItemProps} xs={12} md={6}>
                  {formFields.nhsNumber}
                </Grid>
              )}
              {isFormFieldDisplayedInThisStep("startDate") && (
                <Grid item {...gridItemProps} xs={12} md={6} sx={{ mt: 1 }}>
                  {formFields.startDate}
                </Grid>
              )}
            </Grid>
          </CardContent>
          <CardActions sx={styles.cardActions}>
            <Grid container {...gridContainerProps} spacing={2}>
              <Grid item {...gridItemProps} xs={4}>
                {/* Previous Step */}
                {displayStep > 0 && formFields.previousStepButton}
              </Grid>
              <Grid item {...gridItemProps} xs={8}>
                {/* Next Step */}
                {displayStep > -1 &&
                  displayStep < lastStep &&
                  formFields.nextStepButton}

                {/* SUBMIT BUTTON */}
                {displayStep === lastStep && formFields.submitButton}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
        <LinearProgress
          value={(displayStep / lastStep) * 100}
          variant="determinate"
          color="primary"
          sx={{ m: 0, p: 0, mt: -0.5 }}
        />
      </Form>
    </FormikProvider>
  );
}
export default AddStaffForm;
