import { InputAdornment, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";

export const CurrentMonthlyIncomeStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "currentMonthlyIncome";

  return (
    <FormStepLayout
      title="¿Cuál es tu ingreso mensual actual?"
      control={
        <TextField
          {...register(name, {
            required: "Este campo es obligatorio",
            valueAsNumber: true,
          })}
          type="number"
          InputProps={{
            inputProps: { min: 0, step: 100 },
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          placeholder="Ingreso mensual actual"
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      }
    />
  );
};
