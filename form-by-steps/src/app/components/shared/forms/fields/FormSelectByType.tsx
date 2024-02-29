import {
  $TSFixMeLater,
  CalendarEvent,
  OwnerType,
  StaffWorkerRecord,
} from "@/app/models";

import { getOwnerTypeLabel } from "@/app/utils/ownerTypes";
import { MenuItem, SelectProps, Skeleton, TextField } from "@mui/material";

import getFieldPropsCustom, {
  getTextFieldProps,
  isRequiredField,
} from "@utils/getFieldProps";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObjectSchema } from "yup";
import { Assign, ObjectShape } from "yup/lib/object";
import InfoAlert from "../../InfoAlert";
import FormSelect from "./FormSelect";

// -------------------------

type Props = Partial<Omit<SelectProps, "label" | "name">> & {
  formikBag: $TSFixMeLater;
  validationSchema: ObjectSchema<Assign<ObjectShape, any>> | null;
  ownerType: OwnerType;
  selectType: OwnerType;
  editable?: boolean;
  tabIndex?: number;
  dateRange?: [Date, Date];
  loadedEvents?: CalendarEvent<Date>[];
};

type OptionType = StaffWorkerRecord<Date>;

function FormSelectByType({
  formikBag,
  validationSchema,
  ownerType,
  selectType,
  editable = true,
  tabIndex = 1,
  dateRange,
  loadedEvents,
  ...selectProps
}: Props) {
  const [selectOptions, setSelectOptions] = useState<OptionType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rangeOverlapsError] = useState<boolean>(false);
  const { values, setFieldValue } = formikBag;
  const name = `${selectType.toLowerCase()}Id`;
  const label: string =
    getOwnerTypeLabel(selectType) +
    (isRequiredField(name, validationSchema) ? `*` : ``);

  // ---------

  const onFetchStarted = () => {
    if (dateRange && dateRange.length === 2) {
      setIsLoading(true);
      setSelectOptions([]);
      setFieldValue(name, "", true);
    }
  };

  const fetchFn: () => any =
    selectType === "staff"
      ? () => {
          onFetchStarted();
          return [];
        }
      : () => {};

  const fetchData = async () => {
    setIsLoading(true);

    let list: any[] = (await fetchFn()) || [];
    setSelectOptions(list && list.length > 0 ? list : []);

    setFieldValue(name, (values[name] || selectProps.defaultValue) ?? "", true);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikBag.values.start, formikBag.values.end]);

  // ------

  const selectedItem: Record<string, unknown> | undefined = selectOptions.find(
    (c) => c._id === values[name]
  );

  const displayOptionName = (
    opt: Record<string, unknown> | undefined
  ): string => {
    if (!opt) return "";
    return `${opt.firstName} ${opt.lastName}`;
  };

  const sharedProps = { label, tabIndex };
  const textFieldProps = {
    ...sharedProps,
    ...getTextFieldProps(name, formikBag, validationSchema, !editable),
    value: displayOptionName(selectedItem), // override
    InputLabelProps: {
      shrink: !!displayOptionName(selectedItem),
    },
  };

  const template = !editable ? (
    <TextField {...textFieldProps} />
  ) : rangeOverlapsError ? (
    <InfoAlert
      severity="error"
      content={`Este ${getOwnerTypeLabel(
        ownerType
      ).toLowerCase()} ya tiene alguna cita programada que solapa con estas fechas.`}
    />
  ) : selectOptions.length > 0 ? (
    <FormSelect
      {...sharedProps}
      {...getFieldPropsCustom(name, formikBag, validationSchema, false)}
      {...selectProps}
      readOnly={!editable}>
      {selectOptions.map((opt) => (
        <MenuItem key={opt._id} value={opt._id}>
          {displayOptionName(opt)}
        </MenuItem>
      ))}
    </FormSelect>
  ) : (
    <InfoAlert
      content={`Ningún ${label.toLowerCase()} disponible para el rango de fechas seleccionado.`}
      severity="warning"
    />
  );

  const formFields = {
    staff: template,
    client: template, // sin sentido, pero no te preocupes...
  };

  return isLoading ? (
    <Skeleton variant="rectangular" width="100%" height={54} />
  ) : (
    formFields[selectType]
  );
}
export default FormSelectByType;
