import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";

export const AverageExpensesStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "averageExpenses";

  return (
    <FormStepLayout
      title="¿Cuánto gasta tu negocio al mes (gastos operativos promedio)?"
      subTitle="Gastos que se verían aumentados si recibes nuevos clientes"
      control={
        <TextField
          {...register(name, {
            required: "Este campo es Obligatorio",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="120"
          InputProps={{
            inputProps: { min: 0, step: 50 },
          }}
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      }
    />
  );
};
