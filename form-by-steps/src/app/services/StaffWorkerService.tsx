import { StaffWorker, StaffWorkerRecord } from "@models/index";
import axios from "axios";
import AppConfig from "../App.config";
import NotificationsService from "./NotificationsService";

// -----------------------------------------------------------------------

const _featureEndpoint = AppConfig.apiEndpoints.staff; // TODO: Renombrar "staff" a leadMagnets

// TODO: Renombrar a LeadMagnetService, ya que el "Lead Magnet" es el tipo de recurso que se va a gestionar desde aqui.
abstract class StaffWorkerService {
  static createOne = async (payload: StaffWorker<Date>) => {
    try {
      const {
        data: { item },
        // Podemos usar axios o directamente una http request normal.
      } = await axios.post(_featureEndpoint, payload); // Notese como usamos "post"

      return item;
    } catch (err: unknown) {
      console.error(err);
      NotificationsService.displayErrorSaving();
      return undefined;
    }
  };

  static updateOne = async (payload: StaffWorkerRecord<Date>) => {
    try {
      const {
        data: { item, message, success },
      } = await axios.patch(_featureEndpoint, payload); // Notese como usamos "patch" (actualiza parcial) o "update" (sobreescribe todo) en vez de "post". 


      if (message) {
        NotificationsService.generateSnackbarAlert(
          message,
          success ? "success" : "error"
        );
      } else {
        if (!item) {
          NotificationsService.displayErrorSaving();
          return;
        } else {
          NotificationsService.displaySuccessSaving();
        }
      }

      return item;
    } catch (err: unknown) {
      console.error(err);
      NotificationsService.displayErrorSaving();
      return undefined;
    }
  };
}

export default StaffWorkerService;
