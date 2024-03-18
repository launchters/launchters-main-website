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
            maxLength: {
              value: 7,
              message: "El número no puede ser mayor a 7 dígitos",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Por favor ingresa un número válido",
            },
          })}
          InputProps={{
            inputProps: { min: 0, step: 1 },
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          placeholder="Ingreso mensual actual"
          type="number"
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      }
    />
  );
};
