import { TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../FormInputTypes"; 

interface EmailStepProps {
  onNext: () => Promise<void>;
}

export const EmailStep: React.FC<EmailStepProps> = () => {
  const { register, formState: { errors } } = useFormContext<IFormInput>(); 
  
  const errorMessage = errors.email && typeof errors.email.message === 'string' ? errors.email.message : '';
  const titleProps = {};

  return (
    <>
      <Typography variant="h4" className="title-margin" {...titleProps}>
        Agregar tu correo electrónico
      </Typography>
      <TextField
        {...register("email", {
          required: "Este Campo Es Obligatorio",
          pattern: {
            value: /^[^@]+@[^@]+\.[^@]+$/,
            message: "Por favor ingresa un correo electrónico válido"
          },
        })}
        placeholder="ejemplo@correo.com"
        error={!!errors.email}
        helperText={errorMessage}
      />
    </>
  );
};
