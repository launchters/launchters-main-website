import { OwnerType, timeOffTypes } from "@/app/models";
import moment from "moment";
import * as Yup from "yup";
import { ObjectShape } from "yup/lib/object";
import { excludeSystemProperties } from "../parsing";
import * as validators from "./validators";
import { formErrors } from "./validators";

// -----------------------------------------------------

const dateOptionalValidation = Yup.date()
  .optional()
  .nullable()
  .default(null)

  .notRequired()
  .transform((dt) => (moment(dt).isValid() ? dt : null));

const emailOptionalValidationSchema = Yup.string()
  .optional()
  .nullable()
  .default("")
  .email(formErrors.invalid("Email"));

export const credentialFormValidationSchema = Yup.object().shape({
  email: emailOptionalValidationSchema,
  password: Yup.string().required(formErrors.required),
});

export const passwordRecoveryFormValidationSchema = Yup.object().shape({
  email: emailOptionalValidationSchema,
});

const addPersonValidationSchemaPartial = {
  firstName: Yup.string().required(formErrors.required),
  lastName: Yup.string().optional().nullable().default(""),

  personalID: Yup.string()
    .optional()
    .nullable()
    .default("")
    .matches(validators.personalIDRegExp, {
      message: formErrors.invalid("DNI o NIE"),
    }),

  startDate: dateOptionalValidation,
  postalAddress: Yup.string().optional().nullable().default(""),
  postCode: Yup.string()
    .optional()
    .nullable()
    .default("")
    // text validation
    .matches(validators.postCodeRegExp, {
      message: formErrors.invalid("Código Postal"),
    }),
  phoneNumber: Yup.string()
    .optional()
    .nullable()
    .default("")
    .matches(
      validators.phoneNumberRegExp,
      formErrors.invalid("Núm. de teléfono")
    ),

  town: Yup.string().optional().nullable().default(""),

  district: Yup.string().optional().nullable().default(""),

  companyId: Yup.string().required(formErrors.required),
};

export const addStaffFormValidationSchema = Yup.object().shape({
  ...addPersonValidationSchemaPartial,
  email: emailOptionalValidationSchema,
  annualSalary: Yup.number()

    .optional()
    .nullable()
    .default(0.0)
    .transform((val) => (val && !isNaN(val) ? val : 0.0)),
});

export const addClientFormValidationSchema = Yup.object().shape({
  ...addPersonValidationSchemaPartial,
  paymentAmount: Yup.number()
    .optional()
    .nullable()
    .default(0.0)
    .transform((val) => val || 0.0),
  paymentDone: Yup.boolean().default(false),
  dependencyDegree: Yup.string().default("").optional(),
});

export const addCompanyFormValidationSchema = Yup.object().shape({
  displayName: Yup.string()
    .optional()
    .nullable()
    .default("")
    .required(formErrors.required),
  legalName: Yup.string().optional().nullable().notRequired().default(""),
  logoUrl: Yup.string().default("").optional(),
  VATNumber: Yup.string().optional().nullable().default(""),
  postalAddress: Yup.string().optional().nullable().default(""),
  subStartDate: dateOptionalValidation,
  subEndDate: dateOptionalValidation,
  notes: Yup.string(),
});

export const editClientFormValidationSchema = Yup.object().shape({
  ...excludeSystemProperties<any>(addClientFormValidationSchema.fields),
});

export const editStaffFormValidationSchema = Yup.object().shape({
  ...excludeSystemProperties<any>(addStaffFormValidationSchema.fields),
});

export const editCompanyFormValidationSchema = Yup.object().shape({
  ...excludeSystemProperties<any>(addCompanyFormValidationSchema.fields),
});

export const addTimeOffValidationSchema = Yup.object()
  .shape({
    timeOffType: Yup.string()
      .oneOf(timeOffTypes.map((type) => type.type))
      .required(formErrors.required),
    timeOffStart: dateOptionalValidation,
    timeOffEnd: dateOptionalValidation,
    timeOffNotes: Yup.string().default(""),
  })
  .required(formErrors.required);

export const addCalendarEventValidationSchema = (ownerType: OwnerType) => {
  let shape: ObjectShape = {
    start: dateOptionalValidation,
    end: dateOptionalValidation,
  };
  // Set the counterpart validation
  if (ownerType === "staff")
    shape.clientId = Yup.string().required(formErrors.required);

  return Yup.object().shape(shape).required(formErrors.required);
};

export const addAttachmentFileRequestValidationSchema = Yup.object()
  .shape({
    extension: Yup.string().required(formErrors.required),
    name: dateOptionalValidation,
    data: dateOptionalValidation,
    uploadedAt: Yup.string(),
  })
  .required(formErrors.required);
