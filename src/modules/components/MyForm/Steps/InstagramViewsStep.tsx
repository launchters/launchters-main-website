import { TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes"; 

// interface InstagramViewsStepProps {
//   onNext: () => Promise<void>;
// }

// export const InstagramViewsStep: React.FC<InstagramViewsStepProps> = () => {
 export const InstagramViewsStep = () => {
  const { register, formState: { errors } } = useFormContext<IFormInput>(); 

  
  
  const errorMessage = errors.instagramViews && typeof errors.instagramViews.message === 'string' ? errors.instagramViews.message : '';
  const titleProps = {};

  return (
    <>
      <Typography variant="h4" className="title-margin" {...titleProps}>
        ¿Cuántas visualizaciones tienes de media en tus últimas 6 Stories de Instagram (en días diferentes)?
      </Typography>
      <TextField
  {...register("instagramViews", {
    required: "Este Campo Es Obligatorio",
    pattern: {
      value: /^[0-9]*$/,
      message: "Por favor ingresa un número válido"
    },
  })}
  placeholder="Ejemplo: 10"
  error={!!errors.instagramViews}
  helperText={errorMessage}
  type="number"
  InputProps={{ inputProps: { min: 0, step: 1 } }} 
/>
    </>
  );
};
