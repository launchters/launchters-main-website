import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormStepLayout } from "../FormStepLayout";
import { IFormInput } from "../models/FormInputTypes";

export const EmailStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "email";

  return (
    <FormStepLayout
      title="Email de usuario"
      subTitle="Por favor ingresa tu correo electrónico."
      control={
        <TextField
          {...register(name, {
            required: "Este Campo Es Obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:
                "Por favor ingresa un correo electrónico válido sin espacios",
            },
          })}
          placeholder="ejemplo@correo.com"
          error={!!errors[name]}
          helperText={!!errors[name]?.message?.toString()}
        />
      }
    />
  );
};
