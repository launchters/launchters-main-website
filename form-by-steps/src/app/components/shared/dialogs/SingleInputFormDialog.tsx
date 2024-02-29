import {
  $TSFixMeLater,
  DynamicObject,
  FormikBagProps,
  LabelVariant,
  ThemeProps,
} from "@models/index";
import Iconify from "@components/shared/Iconify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getFormFieldErrorMessage } from "@utils/formUtils";
import preventFormSubmitOnEnter from "@utils/prevent-form-submit-on-enter";
import { Form, FormikProvider } from "formik";
import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import SubmitButtonWithSavingState from "../forms/partials/SubmitButtonWithSavingState";
import AppConfig from "@/app/App.config";

// ----------------------------------------------------------------------

SingleInputFormDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  isWarning: PropTypes.bool,
  title: PropTypes.string.isRequired,
  formAutoComplete: PropTypes.bool,
  inputComponentProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
  }).isRequired,
  confirmButtonText: PropTypes.string,
  contentText: PropTypes.string,
  formikBag: PropTypes.any,
};

type SingleInputFormDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  contentText: string;
  formikBag: FormikBagProps<any>;
  inputComponentProps: {
    id: string;
    label: string;
    placeholder?: string;
    helperText?: string;
    type: string;
    min?: number;
    max?: number;
  };
  variant?: LabelVariant;
  confirmButtonText?: string;
  isWarning?: boolean;
  formAutoComplete?: boolean;
};

// -----------------------------------------------------
function SingleInputFormDialog({
  open = false,
  setOpen,
  title,
  inputComponentProps,
  confirmButtonText = "Confirm",
  contentText,
  formikBag,
  isWarning = false,
  formAutoComplete = false,
}: SingleInputFormDialogProps) {
  const theme: ThemeProps = useTheme();

  const fullScreenDialog = useMediaQuery(theme.breakpoints.down("sm"));

  const resetFormValues = () => {
    formikBag.resetForm();
    setOpen(false);
  };

  const handleClose = resetFormValues;

  // -------

  const {
    errors,
    touched,
    handleSubmit,
    getFieldProps,
    isValid,
    validateOnMount,
  }: FormikBagProps<DynamicObject<$TSFixMeLater>> = formikBag;

  // -------

  const isSubmitDisabled =
    (!validateOnMount && !touched?.challengeInput) || !isValid;

  // -------
  const contentTextTemplate = !isWarning ? (
    <DialogContentText variant="subtitle1" component="div">
      {contentText}
    </DialogContentText>
  ) : (
    <Grid container justifyItems="flex-justify" alignItems="center" spacing={2}>
      <Grid item>
        <Iconify
          icon="eva:alert-circle-fill"
          color="tomato"
          width={54}
          height={54}
        />
      </Grid>

      {contentText && (
        <Grid item xs={isWarning ? 9 : 12}>
          <DialogContentText variant="subtitle1" component="div">
            <>{contentText}</>
          </DialogContentText>
        </Grid>
      )}
    </Grid>
  );
  const inputFieldTemplate: ReactElement = (inputComponentProps && (
    <TextField
      variant={AppConfig.formFieldsVariant}
      {...inputComponentProps}
      {...getFieldProps(inputComponentProps.id)}
      name={inputComponentProps.id}
      id={inputComponentProps.id}
      fullWidth
      autoComplete={formAutoComplete ? "on" : "off"}
      // tabIndex="-1"
      margin="dense"
      error={
        !!getFormFieldErrorMessage(inputComponentProps.id, touched, errors)
      }
      helperText={
        getFormFieldErrorMessage(inputComponentProps.id, touched, errors) ||
        inputComponentProps.helperText ||
        undefined
      }
    />
  )) || <></>;

  // -------
  return (
    <Dialog open={!!open} onClose={handleClose} fullScreen={fullScreenDialog}>
      <FormikProvider value={formikBag}>
        <Form
          autoComplete={formAutoComplete ? "on" : "off"}
          onSubmit={handleSubmit}
          onKeyDown={preventFormSubmitOnEnter}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            {contentTextTemplate}
            {inputFieldTemplate}
          </DialogContent>

          {confirmButtonText && (
            <DialogActions sx={{ m: 1 }}>
              <Grid container justifyContent="flex-end" spacing={2}>
                {/* CANCEL BUTTON */}
                <Grid item>
                  <Button
                    style={{ textTransform: "none" }}
                    size="large"
                    variant="text"
                    color="secondary"
                    onClick={handleClose}>
                    CANCELAR
                  </Button>
                </Grid>
                {/* SUBMIT BUTTON */}
                <Grid item>
                  <SubmitButtonWithSavingState
                    displayText={confirmButtonText}
                    disabled={isSubmitDisabled}
                    isWarning={isWarning}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogActions>
          )}
        </Form>
      </FormikProvider>
    </Dialog>
  );
}
export default SingleInputFormDialog;
