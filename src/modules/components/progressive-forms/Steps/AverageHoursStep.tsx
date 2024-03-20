import { InputAdornment, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";

export const AverageHoursStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "averageHours";

  return (
    <FormStepLayout
      title="¿Cuántas horas promedio dedicas al día a tu negocio?"
      subTitle="Estrategia y Ejecución"
      control={
        <TextField
          {...register(name, {
            required: "Este campo es obligatorio",
            valueAsNumber: true,
          })}
          type="number"
          InputProps={{
            inputProps: { min: 0, max: 24, step: 1 },
            endAdornment: <InputAdornment position="end">h</InputAdornment>,
          }}
          placeholder="Horas promedio al día"
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
          sx={{ width: "170px" }}
        />
      }
    />
  );
};
