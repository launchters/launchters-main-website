import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from '../FormStepLayout';

export const InstagramViewsStep = () => {
  const { register } = useFormContext<IFormInput>();

  return (
    <FormStepLayout 
      nameId="instagramViews" 
      title="¿Cuántas visualizaciones tienes de media en tus últimas 6 Stories de Instagram?"
      subTitle="(en días diferentes)."
    >
      <TextField
        {...register("instagramViews", {
          required: "Este Campo Es Obligatorio",
          pattern: {
            value: /^[0-9]*$/,
            message: "Por favor ingresa un número válido"
          },
        })}
        placeholder="Ejemplo: 10"
        type="number"
        InputProps={{ inputProps: { min: 0, step: 1 } }}
      />
    </FormStepLayout>
  );
};
