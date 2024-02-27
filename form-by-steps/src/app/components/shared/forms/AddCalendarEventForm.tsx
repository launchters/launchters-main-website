import { $TSFixMeLater, CalendarEvent, OwnerType } from "@/app/models";
import { Grid } from "@mui/material";
import getFieldPropsCustom from "@utils/getFieldProps";
import preventFormSubmitOnEnter from "@utils/prevent-form-submit-on-enter";
import { Form, FormikProvider } from "formik";
import { ObjectSchema } from "yup";
import { Assign, ObjectShape } from "yup/lib/object";
import styles from "../../styles/DetailsPage.styles";
import DividerSection from "../DividerSection";
import InfoAlert from "../InfoAlert";
import DateTimePickerLocalisedControl from "./fields/DateTimePickerLocalisedControl";
import FormSelectByType from "./fields/FormSelectByType";
import FormSectionHeading from "./partials/FormSectionHeading";
import SubmitButtonWithSavingState from "./partials/SubmitButtonWithSavingState";

// -------------------------

type Props = {
  formikBag: $TSFixMeLater;
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null;
  ownerType: OwnerType;
  calendarEvents: CalendarEvent<Date>[];
};

const AddCalendarEventForm = ({
  formikBag,
  validationSchema,
  ownerType,
  calendarEvents,
}: Props) => {
  const startDateProps = getFieldPropsCustom(
    "start",
    formikBag,
    validationSchema
  );
  const endDateProps = getFieldPropsCustom("end", formikBag, validationSchema);

  // -----
  const formFields = {
    start: (
      <DateTimePickerLocalisedControl
        pickerVariant="datetime"
        {...startDateProps}
        label="Inicio"
      />
    ),
    end: (
      <DateTimePickerLocalisedControl
        pickerVariant="datetime"
        {...endDateProps}
        label="Fin"
        minDateTime={formikBag.values.start || undefined}
      />
    ),
    dropdown: (
      validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null
    ) => (
      <FormSelectByType
        editable
        {...{ validationSchema, formikBag, ownerType }}
        dateRange={[startDateProps.value, endDateProps.value]}
        loadedEvents={calendarEvents}
        selectType={
          // choose the counter-side of the current ownerType
          ownerType === "staff" ? "client" : "staff"
        }
      />
    ),
  };

  return (
    <FormikProvider value={formikBag}>
      <Form
        autoComplete="off"
        onSubmit={formikBag.handleSubmit}
        onKeyDown={preventFormSubmitOnEnter}>
        <FormSectionHeading>Agregar nueva cita</FormSectionHeading>

        <Grid
          container
          spacing={2}
          sx={{ ...styles.gridContainerInsideCard, mx: -2 }}>
          <Grid item xs={12} md={4} sx={styles.formInputFieldGridItem}>
            {formFields.start}
          </Grid>
          <Grid item xs={12} md={4} sx={styles.formInputFieldGridItem}>
            {formFields.end}
          </Grid>

          <Grid item xs={12} md={4} sx={styles.formInputFieldGridItem}>
            {formikBag.values.start && formikBag.values.end ? (
              formFields.dropdown(validationSchema)
            ) : (
              <InfoAlert
                severity="warning"
                content="Selecciona las fechas antes de elegir a quien asignarla."
              />
            )}
          </Grid>
        </Grid>

        <SubmitButtonWithSavingState
          displayText="Agregar cita"
          alignRight
          sx={{ mt: 2 }}
        />
      </Form>
      <DividerSection />
    </FormikProvider>
  );
};

export default AddCalendarEventForm;
