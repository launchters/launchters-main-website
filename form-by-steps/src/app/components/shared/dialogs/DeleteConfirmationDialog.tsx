import { formErrors } from "@/app/utils/validation/validators";
import { DeleteConfirmationFormValues, FormikBagProps } from "@models/index";
import SingleInputFormDialog from "@components/shared/dialogs/SingleInputFormDialog";
import { normalizeCommaSeparatedString, normalizeString } from "@utils/parsing";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import NotificationsService from "@/app/services/NotificationsService";

// -----------------------------------------------------

type Props = {
  deleteResourceRefType?: string;
  challengeRef?: string[];
  onConfirmCb: () => Promise<void>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

// -----------------------------------------------------
function DeleteConfirmationDialog({
  deleteResourceRefType,
  challengeRef = ["eliminar"],
  onConfirmCb,
  open,
  setOpen,
}: Props) {
  const separator = ",";
  const challengeRefStr = challengeRef.join(`${separator} `);
  const caseInsensitiveChallenge = true;

  const challengeCheckApproved = (
    challengeInput: string, // the values introduced by the user
    challengeRef: string[] // the values it should match with
  ) => {
    if (!challengeRef || challengeRef?.length === 0) return true; // when challenge is not necessary
    if (challengeRef && !challengeInput) return false;

    // for every input value should exist a match included in the challengeRef (case insensitive)
    const inputItemsArray = normalizeCommaSeparatedString(
      challengeInput ?? "",
      true,
      separator
    );

    if (inputItemsArray.length > 0) {
      return (
        inputItemsArray.length === challengeRef.length &&
        inputItemsArray.every((refItem) =>
          challengeRef
            .map((str) => normalizeString(str, caseInsensitiveChallenge))
            .includes(normalizeString(refItem, caseInsensitiveChallenge))
        )
      );
    }

    return false;
  };

  // --------

  const FormValidationSchema = Yup.object().shape({
    challengeInput: Yup.string()
      .test(
        "challengeRefMatching",
        deleteResourceRefType
          ? `Debes introducir cada ${deleteResourceRefType!.toLowerCase()} para confirmar la eliminación permanente: ${challengeRefStr}`
          : `Debes introducir exactamente la palabra '${challengeRefStr}' para confirmar la eliminación permanente`,
        (challengeInput) =>
          !!(
            challengeRef &&
            challengeInput &&
            challengeCheckApproved(challengeInput, challengeRef)
          )
      )
      // .min(1, formErrors.tooShort)
      .required(formErrors.required),
  });

  const handleFormSubmit = ({
    challengeInput,
  }: DeleteConfirmationFormValues): void => {
    try {
      // Do the challenge and then delete
      const isChallengeTestApproved =
        challengeRef &&
        challengeInput &&
        challengeCheckApproved(
          // user challenge input values
          challengeInput,
          // the reference that these values should match
          challengeRef
        );

      if (isChallengeTestApproved && onConfirmCb != null) onConfirmCb();

      // close the dialog
      handleClose();
    } catch (err) {
      NotificationsService.displayErrorSaving();
      if (process.env.NODE_ENV === "development") console.error(err);
    }
  };

  const validationSchema = FormValidationSchema;
  const formikBag = useFormik({
    initialValues: {
      challengeInput: "",
    },
    validationSchema,
    onSubmit: handleFormSubmit,
    // Submit disabled by default if user does not enters a value
    validateOnMount: true,
  });

  // --------

  const resetFormValues = () => {
    formikBag.resetForm();
    setOpen(false);
  };

  const handleClose = resetFormValues;

  // --------
  return (
    <SingleInputFormDialog
      open={!!open}
      setOpen={setOpen}
      isWarning
      title="Confirmar borrado permanente"
      contentText={`Provocará una PÉRDIDA DE DATOS IRREVERSIBLE. Esta acción no se puede deshacer.`}
      inputComponentProps={{
        id: "challengeInput",
        label: `Confirmacion para eliminar`,
        helperText: deleteResourceRefType
          ? `Escribe ${deleteResourceRefType.toLowerCase()} para confirmar la eliminación: ${challengeRefStr}`
          : `Escribe '${challengeRefStr}' para confirmar la eliminación`,
        placeholder: challengeRefStr,
        type: "text",
      }}
      confirmButtonText="Borrar para siempre"
      formikBag={formikBag as FormikBagProps<DeleteConfirmationFormValues>}
    />
  );
}
export default DeleteConfirmationDialog;
