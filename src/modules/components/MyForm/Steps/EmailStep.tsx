import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes"; 
import { FormStepLayout } from "../FormStepLayout";


export const EmailStep = () => {
  const { register} = useFormContext<IFormInput>(); 

  return (
    <FormStepLayout
      nameId="email"
      title="Email de usuario"
      subTitle="Por favor ingresa tu correo electrónico."
    >
<TextField
  {...register("email", {
    required: "Este Campo Es Obligatorio",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Por favor ingresa un correo electrónico válido sin espacios"
    },
  })}
  placeholder="ejemplo@correo.com"
/>


  </FormStepLayout>
);
};
