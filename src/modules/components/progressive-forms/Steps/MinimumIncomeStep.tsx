import { InputAdornment, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";

export const MinimumIncomeStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "minimumIncome";

  return (
    <FormStepLayout
      title="¿Cuántos ingresos mensuales MÍNIMOS, necesitarías para alcanzar VIVIR DE TU COACHING?"
      control={
        <TextField
          {...register(name, {
            required: "Este campo es obligatorio",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Ingresos mínimos"
          InputProps={{
            inputProps: { min: 1000, step: 100 },
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      }
    />
  );
};
