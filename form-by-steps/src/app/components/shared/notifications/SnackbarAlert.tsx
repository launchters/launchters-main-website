import { useEffectOnce } from "@/app/hooks/useEffectOnce";
import { $TSFixMeLater } from "@models/index";
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import NotificationsService from "@services/NotificationsService";
import { useState } from "react";
import { v4 as uuid } from "uuid";

// ----------------------------------------------------------------------

type SnackbarAlertProps = {
  id?: string;
  wording: string;
  severity?: AlertColor;
};

function SnackbarAlert() {
  const duration = 6000;
  const vertical = "top";
  const horizontal = "right";

  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>(""); // snackbarId - readonly
  const [severity, setSeverity] = useState<AlertColor>("info");
  const [wording, setWording] = useState<string>("Snackbar wording");

  const handleSnackbarChange = ({
    wording,
    severity = "info",
  }: SnackbarAlertProps) => {
    setId(uuid());
    setWording(wording);
    setSeverity(severity);
    setOpen(true);
  };

  // -------
  const fetchData = () => {
    // Subscribe and set properties
    const snackbars$ = NotificationsService._currentSnackbarAlert$;
    snackbars$.subscribe(
      (snackbar) => snackbar && handleSnackbarChange(snackbar)
    );

    return () => {
      console.log("snackbars unsubscribe");
      snackbars$.unsubscribe();
    };
  };

  useEffectOnce(() => {
    fetchData();
  });

  // -------

  const closeSnackbar = (
    _event: $TSFixMeLater,
    reason?: SnackbarCloseReason
  ): void => {
    console.log(`Closing snackbar: ${id}`, reason ?? "");
    setOpen(false);
  };

  const mainTemplate = open && (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={!!open}
      autoHideDuration={duration}
      onClose={closeSnackbar}
      key={`${vertical + horizontal}`}
      id={`${vertical + horizontal}`}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={closeSnackbar}
        severity={severity}
        className="w-100">
        {wording}
      </Alert>
    </Snackbar>
  );

  return mainTemplate || <></>;
}
export default SnackbarAlert;
