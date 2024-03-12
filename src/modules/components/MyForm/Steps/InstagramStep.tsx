import { TextField, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from "../FormStepLayout";

export const InstagramStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInput>();
  const name = "instagram";

  return (
    <FormStepLayout
      title="Instagram del usuario"
      subTitle="Por favor ingresa tu nombre de usuario de Instagram."
      control={
        <TextField
          {...register("instagram", {
            required: "Este Campo Es Obligatorio",
            maxLength: {
              value: 30,
              message: "El número no puede ser mayor a 30 dígitos",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.-]*$/,
              message: "Por favor ingresa un usuario de Instagram válido",
            },
          })}
          InputProps={{
            startAdornment: <InputAdornment position="start">@</InputAdornment>,
          }}
          placeholder="nombredeusuario"
          error={!!errors[name]}
          helperText={!!errors[name]?.message?.toString()}
        />
      }
    />
  );
};
