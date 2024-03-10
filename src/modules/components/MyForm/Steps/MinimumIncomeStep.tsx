import { InputAdornment, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";

// interface MinimumIncomeStepProps {
//   onNext: () => Promise<void>;
// }

// export const MinimumIncomeStep: React.FC<MinimumIncomeStepProps> = () => {
export const MinimumIncomeStep = () => {
  const { register, formState: { errors } } = useFormContext<IFormInput>(); 
  
  const errorMessage = errors.minimumIncome && typeof errors.minimumIncome.message === 'string' ? errors.minimumIncome.message : '';
  const titleProps = {};

  return (
    <>
      <Typography variant="h4" className="title-margin" {...titleProps}>
        ¿Cuántos ingresos mensuales MÍNIMOS, necesitarías para vivir de tu coaching?
      </Typography>
      <TextField
        {...register("minimumIncome", {
          required: "Este campo es obligatorio",
          maxLength: {
            value: 7,
            message: "El número no puede ser mayor a 7 dígitos"
          },
          pattern: {
            value: /^[0-9]*$/,
            message: "Por favor ingresa un número válido"
          },
        })}
        placeholder="Ingresos mínimos"
        error={!!errors.minimumIncome}
        helperText={errorMessage}
        type="number" 
        InputProps={{ 
          inputProps: { min: 0, step: 1 },
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }} 
      />
    </>
  );
};
