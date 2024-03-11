import { TextField, Typography, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes"; 

// interface InstagramStepProps {
//   onNext: () => Promise<void>;
// }

// export const InstagramStep: React.FC<InstagramStepProps> = () => {
export const InstagramStep = () => {
  const { register, formState: { errors } } = useFormContext<IFormInput>(); 
  
  const errorMessage = errors.instagram && typeof errors.instagram.message === 'string' ? errors.instagram.message : '';
  const titleProps = {};

  return (
    <>
      {/*
      // TODO: Crear un Componente que sea <FormStepLayout /> al cual
              le pasaremos como parametros/props lo siguiente:
              interface StepComponentProps {
                nameId: string;
                title: string;
                subTitle: string;
                children: React.ReactNode | React.ReactNode[];
              }
              como children le pasaremos exactamente el input que queramos, que en este caso es un TextField 
              con todos sus parametros y tal..
              Dentro de ese Layout sustituiremos el errors.instagram (y similares) por errors[nameId]

              Una vez terminado ya tenemos listo <FormLayout para utilizarlo desde ProfitCalcGPLeadMagnetForm 
              directamente para todos los inputs,
              ya no serán necesarios los componentes creados desde la carpeta Steps.
      */}
      <Typography variant="h4" className="title-margin" {...titleProps}>
        Agregar tu usuario de Instagram
      </Typography>
      {/* // TODO: Extraer las titleProps al componente padre y pasarlas a este como parametros.
      // TODO: Crear un subtitulo para todas las Steps. Hacer que sea opcional. */}
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
