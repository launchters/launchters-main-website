import { InputAdornment, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from '../FormStepLayout';

export const MinimumIncomeStep = () => {
  const { register } = useFormContext<IFormInput>();

  return (
    <FormStepLayout
      nameId="minimumIncome"
      title="¿Cuántos ingresos mensuales MÍNIMOS, necesitarías para alcanzar VIVIR DE TU COACHING?"
    >
      <TextField
        {...register("minimumIncome", {
          required: "Este campo es obligatorio",
          maxLength: {
            value: 7,
            message: "El número no puede ser mayor a 7 dígitos"
          },
          pattern: {
            value: /^[0-9]*$/,
            message: "Por favor ingresa un número válido"
          },
        })}
        placeholder="Ingresos mínimos"
        type="number"
        InputProps={{
          inputProps: { min: 0, step: 1 },
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />
    </FormStepLayout>
  );
};

