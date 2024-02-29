import styles from "@components/styles/DetailsPage.styles";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, Grid } from "@mui/material";
import { SxProps } from "@mui/system";
import { useFormikContext } from "formik";

// ----------------------------------------------------------------------

type Props = {
  displayText?: string;
  size?: "large" | "small" | "medium" | undefined;
  variant?: "contained" | "text" | "outlined" | undefined;
  disabled?: boolean;
  isWarning?: boolean;
  noMargin?: boolean;
  enabledIfFormIsPristine?: boolean;
  sx?: SxProps;
  alignRight?: boolean;
  fullWidth?: boolean;
  tabIndex?: number;
};

// ----------------------------------------------------------------------

function SubmitButtonWithSavingState({
  displayText = "GUARDAR CAMBIOS",
  disabled,
  size = "large",
  variant = "contained",
  isWarning,
  noMargin = false,
  enabledIfFormIsPristine = false,
  sx,
  alignRight = true,
  fullWidth = false,
  tabIndex,
}: Props) {
  const textWhileSubmitting = "GUARDANDO...";
  const { isValid, dirty, isSubmitting, touched, errors } = useFormikContext();
  const isModified = dirty && Object.keys(touched).length > 0;
  const hasErrors = !isValid || Object.keys(errors).length > 0;

  const isDisabled =
    disabled ||
    //default  Rules
    hasErrors ||
    (!enabledIfFormIsPristine && !isModified);

  const sxProps = {
    minWidth: "100%",
    width: "100%",
    ...(noMargin
      ? { mx: 0 }
      : alignRight
      ? { ml: "auto", mr: 0 }
      : { mx: "auto" }),
    ...sx,
  };

  const btnTemplate = (
    <LoadingButton
      {...{ size, variant, tabIndex }}
      type="submit"
      fullWidth
      loading={isSubmitting}
      color={isWarning ? "warning" : "primary"}
      disabled={isDisabled}
      sx={sxProps}
      loadingIndicator={
        <>
          <CircularProgress size={25} color="info" />
          &nbsp;&nbsp;&nbsp;
          {textWhileSubmitting.toUpperCase()}
        </>
      }
    >
      {displayText.toUpperCase()}
    </LoadingButton>
  );

  return (
    <Grid container spacing={2}>
      <Grid
        item
        sm={alignRight && !fullWidth ? 6 : 12}
        md={alignRight && !fullWidth ? 4 : 12}
        sx={{ ...styles.formInputFieldGridItem, ml: "auto", mr: 0 }}
      >
        {btnTemplate}
      </Grid>
    </Grid>
  );
}

export default SubmitButtonWithSavingState;
