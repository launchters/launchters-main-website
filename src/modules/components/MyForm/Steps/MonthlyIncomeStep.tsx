import { TextField, Typography, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes"; 

// interface MonthlyIncomeStepProps {
//   onNext: () => Promise<void>;
// }

// export const MonthlyIncomeStep: React.FC<MonthlyIncomeStepProps> = () => {
export const MonthlyIncomeStep = () => {
  const { register, formState: { errors } } = useFormContext<IFormInput>(); 
  
  const errorMessage = errors.monthlyIncome && typeof errors.monthlyIncome.message === 'string' ? errors.monthlyIncome.message : '';
  const titleProps = {};

  return (
    <>
      <Typography variant="h4" className="title-margin" {...titleProps}>
        ¿Cuál es tu ingreso mensual actual?
      </Typography>
      <TextField
        {...register("monthlyIncome", {
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
        placeholder="Ingreso mensual actual"
        error={!!errors.monthlyIncome}
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
