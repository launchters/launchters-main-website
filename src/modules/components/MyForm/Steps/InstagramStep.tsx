import { TextField, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes"; 
import { FormStepLayout } from "../FormStepLayout";

export const InstagramStep = () => {
  const { register } = useFormContext<IFormInput>(); 
  
  return (
    <FormStepLayout
      nameId="instagram"
      title="Instagram del usuario"
      subTitle="Por favor ingresa tu nombre de usuario de Instagram."
    >
      <TextField
        {...register("instagram", {
          required: "Este Campo Es Obligatorio",
          maxLength: {
            value: 30,
            message: "El número no puede ser mayor a 30 dígitos"
          },
          pattern: {
            value: /^[a-zA-Z0-9_.-]*$/,
            message: "Por favor ingresa un usuario de Instagram válido"
          },
        })}
        placeholder="nombredeusuario"
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>,
        }}
      />
    </FormStepLayout>
  );
  };