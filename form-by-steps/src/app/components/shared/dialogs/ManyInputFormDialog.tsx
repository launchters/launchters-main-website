import {
  $TSFixMeLater,
  DynamicObject,
  FormikBagProps,
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
  Stack,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import preventFormSubmitOnEnter from "@utils/prevent-form-submit-on-enter";
import { Form, FormikProvider } from "formik";
import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import SubmitButtonWithSavingState from "../forms/partials/SubmitButtonWithSavingState";

// ----------------------------------------------------------------------

ManyInputFormDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  isWarning: PropTypes.bool,
  title: PropTypes.string.isRequired,
  formAutoComplete: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  contentText: PropTypes.string,
  formikBag: PropTypes.any,
};

type ManyInputFormDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  contentText: string;
  formikBag: FormikBagProps<any>;
  formTemplateLayout: ReactElement | ReactElement[];
  confirmButtonText?: string;
  isWarning?: boolean;
  formAutoComplete?: boolean;
};

// -----------------------------------------------------
function ManyInputFormDialog({
  open = false,
  setOpen,
  title,
  formTemplateLayout,
  confirmButtonText = "Confirm",
  contentText,
  formikBag,
  // variant = 'filled',
  isWarning = false,
  formAutoComplete = false,
}: ManyInputFormDialogProps) {
  const theme: ThemeProps = useTheme();

  const fullScreenDialog = useMediaQuery(theme.breakpoints.down("sm"));

  const resetFormValues = () => {
    formikBag.resetForm();
    setOpen(false);
  };

  const handleClose = resetFormValues;

  // -------

  const {
    // errors,
    touched,
    handleSubmit,
    // getFieldProps,
    isValid,
    validateOnMount,
  }: FormikBagProps<DynamicObject<$TSFixMeLater>> = formikBag;

  // -------

  const isSubmitDisabled =
    (!validateOnMount && !touched?.challengeInput) || !isValid;

  // -------
  const contentTextTemplate = !isWarning ? (
    <DialogContentText variant="subtitle1">
      <>{contentText}</>
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
          <DialogContentText variant="subtitle1">
            <>{contentText}</>
          </DialogContentText>
        </Grid>
      )}
    </Grid>
  );

  // -------
  return (
    <Dialog open={!!open} onClose={handleClose} fullScreen={fullScreenDialog}>
      <FormikProvider value={formikBag}>
        <Form
          autoComplete={formAutoComplete ? "on" : "off"}
          onSubmit={handleSubmit}
          onKeyDown={preventFormSubmitOnEnter}
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            {contentTextTemplate}
            {formTemplateLayout}
          </DialogContent>

          {confirmButtonText && (
            <DialogActions>
              <Stack direction="row" justifyItems="flex-end">
                {/* CANCEL BUTTON */}
                <Button style={{textTransform: 'none'}}
                  size="large"
                  variant="text"
                  color="secondary"
                  onClick={handleClose}
                >
                  CANCEL
                </Button>

                {/* SUBMIT BUTTON */}
                <SubmitButtonWithSavingState
                  displayText={confirmButtonText}
                  disabled={isSubmitDisabled}
                  isWarning={isWarning}
                  noMargin
                />
              </Stack>
            </DialogActions>
          )}
        </Form>
      </FormikProvider>
    </Dialog>
  );
}
export default ManyInputFormDialog;
