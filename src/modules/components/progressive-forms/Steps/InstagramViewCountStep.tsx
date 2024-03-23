import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from "../FormStepLayout";

export const InstagramViewCountStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "instagramViewCount";

  return (
    <FormStepLayout
      title="¿Cuántas visualizaciones tienes de media en tus últimas 6 Stories de Instagram?"
      subTitle="(en días diferentes)."
      control={
        <TextField
          {...register(name, {
            required: "Este Campo Es Obligatorio",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="50"
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
