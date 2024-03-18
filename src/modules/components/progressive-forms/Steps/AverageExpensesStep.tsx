import { InputAdornment, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";

export const AverageExpensesStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "averageHours";

  return (
    <FormStepLayout
      title="¿Cuánto gasta tu negocio al mes (gastos operativos promedio)?"
      subTitle="Gastos que se verían aumentados si recibes nuevos clientes"
      control={
        <TextField
          {...register(name, {
            required: "Este campo es Obligatorio",
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
          placeholder="Gastos operativos promedio"
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      }
    />
  );
};
