import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from "../FormStepLayout";

export const InstagramViewsStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "instagramViews";

  return (
    <FormStepLayout
      title="¿Cuántas visualizaciones tienes de media en tus últimas 6 Stories de Instagram?"
      subTitle="(en días diferentes)."
      control={
        <TextField
          {...register("instagramViews", {
            required: "Este Campo Es Obligatorio",
            pattern: {
              value: /^[0-9]*$/,
              message: "Por favor ingresa un número válido",
            },
          })}
          placeholder="Ejemplo: 10"
          error={!!errors[name]}
          helperText={errors[name]?.message?.toString()}
        />
      }
    />
  );
};
