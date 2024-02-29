import { ThemeProps } from "@models/index";
import Iconify from "@components/shared/Iconify";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { ReactElement } from "react";

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  contentText: ReactElement;
  closeButtonText?: string;
  primaryButton?: JSX.Element;
  isWarning?: boolean;
};

// -----------------------------------------------------
function TextOnlyDialog({
  open = false,
  setOpen,
  title,
  closeButtonText = "CERRAR",
  contentText,
  primaryButton,
  isWarning = false,
}: Props) {
  const theme: ThemeProps = useTheme();
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setOpen(false);
  };

  // -------
  const dialogContentTemplate = !isWarning ? (
    <DialogContentText variant="subtitle1" component="div">
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
          <DialogContentText variant="subtitle1" component="div">
            <>{contentText}</>
          </DialogContentText>
        </Grid>
      )}
    </Grid>
  );

  // -------
  return (
    <Dialog open={!!open} onClose={handleClose} fullScreen={fullScreenDialog}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{dialogContentTemplate}</DialogContent>

      <DialogActions sx={{ m: 1 }}>
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button style={{textTransform: 'none'}}
              size="large"
              variant="text"
              color="secondary"
              onClick={handleClose}
            >
              {closeButtonText}
            </Button>
          </Grid>
          {primaryButton && <Grid item>{primaryButton}</Grid>}
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default TextOnlyDialog;
