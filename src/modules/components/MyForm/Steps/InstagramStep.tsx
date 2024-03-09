import { TextField, Typography, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../FormInputTypes"; 

interface InstagramStepProps {
  onNext: () => Promise<void>;
}

export const InstagramStep: React.FC<InstagramStepProps> = () => {
  const { register, formState: { errors } } = useFormContext<IFormInput>(); 
  
  const errorMessage = errors.instagram && typeof errors.instagram.message === 'string' ? errors.instagram.message : '';
  const titleProps = {};

  return (
    <>
      <Typography variant="h4" className="title-margin" {...titleProps}>
        Agregar tu usuario de Instagram
      </Typography>
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
        error={!!errors.instagram}
        helperText={errorMessage}
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>,
        }}
      />
    </>
  );
};
