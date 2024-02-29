import { AlertColor } from "@mui/material";
import { BehaviorSubject } from "rxjs";
import { v4 as uuid } from "uuid";

// -----------------------------------------------------------------------

type SnackbarAlertProps = {
  id?: string;
  wording: string;
  severity: AlertColor | undefined;
};

// using const to have similar results than an static method of an abstract class
abstract class NotificationsService {
  static _currentSnackbarAlert$ = new BehaviorSubject<
    SnackbarAlertProps | undefined
  >(undefined);

  static _closeSnackbarAlert = (id?: string) => {
    // Close them all if no id is provided. Otherwise, if id is provided, ensure the id matches with the current one before closing
    if (
      !id ||
      id === NotificationsService._currentSnackbarAlert$.getValue()?.id
    )
      NotificationsService._currentSnackbarAlert$.next(undefined);
  };

  static generateSnackbarAlert = (wording: string, severity: AlertColor) => {
    const obj: SnackbarAlertProps = {
      id: uuid(),
      wording,
      severity,
    };
    NotificationsService._currentSnackbarAlert$.next(obj);
  };

  static displayErrorSaving() {
    return this.generateSnackbarAlert(`Error al guardar los cambios`, "error");
  }

  static displaySuccessSaving() {
    return this.generateSnackbarAlert(
      "Tus cambios han sido guardados correctamente",
      "success"
    );
  }
}

export default NotificationsService;
