import { TextField, Button, Typography } from "@mui/material"
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface EmailStepProps {
    register: UseFormRegister<any>;
    errors: FieldErrors;
    onNext: () => void;
  }

export const EmailStep: React.FC<EmailStepProps> = ({ register, errors, onNext }) => {
    return (
        <>
        <Typography>Agregar tu correo electrónico:</Typography>
        <TextField 
        {...register("email", { 
            required: "Este Campo Es Obligatorio",
            pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Por favor ingresa un correo electrónico válido"
            },
        })} 
        placeholder="Tu Correo Electrónico"
        type="email"
        error={!!errors.email}
        helperText={errors.email ? (typeof errors.email.message === 'string' ? errors.email.message : '') : ''}
      />
       {//? Dejo lo lógica del botón aquí o en ProfitCalcGPLeadMagnetForm.tsx? No lo tengo claro
        /* <Button onClick={onNext}>Siguiente</Button> */}
        </>
    )
}