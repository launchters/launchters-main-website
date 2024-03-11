import { TextField, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from '../FormStepLayout';

export const AverageHoursStep = () => {
  const { register } = useFormContext<IFormInput>();

  return (
    <FormStepLayout
      nameId="averageExpenses"
      title="¿Cuánto gasta tu negocio al mes (gastos operativos promedio)?"
      subtitle="Gastos que se verían aumentados si recibes nuevos clientes"
    >
      <TextField
        {...register("averageExpenses", {
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
        placeholder="Gastos operativos promedio"
        type="number"
        InputProps={{
          inputProps: { min: 0, step: 1 },
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />
    </FormStepLayout>
  );
};
