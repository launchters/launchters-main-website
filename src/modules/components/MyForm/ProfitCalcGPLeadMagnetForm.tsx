import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import appConfig from "../../../config/app.config";
import { $TSFix } from "../../models/ts-fix.d";
import FormStepLayout from "./FormStepLayout";

const mergeAllSteps = false; // ! FOR DEV. PURPOSES ONLY.

/* 




TODO: Usar REACT HOOK FORMS o Formik Forms y no el useState hook.




*/

export default function ProfitCalcGPLeadMagnetForm() {
  const [currentStep, setCurrentStep] = useState(0); // TODO Modificado a 0, siempre usa 0 como el principio al iniciar una relacion de numeros consecutivos, te evitara problemas!
  const [formData, setFormData] = useState({
    email: "",
    instagram: "",
    // *... más campos del formulario
  });

  const handlePrevStep = () => {
    // TODO ¿Y si echamos atrás más alla de lo posible? Para evitarlo incluir un IF statement (ver linea comentada):
    // if (currentStep > 0)
    setCurrentStep(currentStep - 1);
  };
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleFieldChange = (e: $TSFix) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: $TSFix) => {
    e.preventDefault();
    // * Apartado para manejar el envío de los datos del formulario
  };

  const sharedFormControlProps = {
    // La variante cambia la apariencia del formulario, la tendremos centralizada para asi afectar a todos los campos de formulario que apliquemos.
    variant: appConfig.forms.variant,
  };

  // TODO: Debemos intentar no repetir toda la estructura para cada campo, y pasar los campos de manera dinámica, por lo que utilizaremos una constante para configurar los campos, mientras que el template lo extraemos al componente "LeadMagnetFormField"

  const formFieldSharedProps = {
    handlePrevStep,
    handleNextStep,
    formData,
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form lead-magnet-form--profit-calc"
      style={{ width: "max(95vw, 300px)", margin: "auto" }}
    >
      <Box
        justifyContent="space-evenly"
        alignItems="space-evenly"
        justifyItems="space-evenly"
        alignContent="space-evenly"
      >
        {/*
        // ! INSTAGRAM (tu version)
        */}

        {(mergeAllSteps || currentStep === 0) && (
          // TODO: Cambiar el codigo siguiente por la version más abajo (comentada) para instagram y ver las diferencias que tiene.
          <div>
            <Typography>Agregar tu Instagram:</Typography>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <TextField
              name="instagram"
              value={formData.instagram}
              onChange={handleFieldChange}
              placeholder="Tu Instagram"
            />
            <Button onClick={handleNextStep}>Next</Button>
          </div>
        )}
        {/*
        // ! INSTAGRAM (nuevo)
        */}
        {
          // (mergeAllSteps || currentStep === 0) && (
          //   <FormStepLayout
          //     {...formFieldSharedProps}
          //     name="instagram"
          //     title="Tu usuario de Instagram:"
          //     prevIcon={<InstagramIcon />}
          //     fieldCtrl={
          //       <TextField
          //         {...sharedFormControlProps}
          //         name="instagram"
          //         value={formData.instagram}
          //         onChange={handleFieldChange}
          // // TODO: Descomentar codigo siguiente. Debes notar que el placeholder lo que pretende es emular un texto real de ejemplo, mientras que la etiqueta (label) es una indicación sobre qué debe escribirse en ese campo
          //          placeholder="launchters"
          //          label="Tu instagram"
          // // TODO: Descomentar codigo a continuacion para ver como la @ se agrega al "input"
          //        InputProps={{ startAdornment: <AlternateEmailIcon sx={{ mr: 1 }} /> }}
          //       />
          //     }
          //   />
          // )
        }

        {/*
        // ! EMAIL
        */}
        {(mergeAllSteps || currentStep === 1) && (
          <FormStepLayout
            {...formFieldSharedProps}
            name="email"
            title="Tu email:"
            subTitle="Para enviarte los resultados de la estimación"
            fieldCtrl={
              <TextField
                {...sharedFormControlProps}
                name="email"
                value={formData.email}
                onChange={handleFieldChange}
                placeholder="tu@email.com"
                label="E-mail"
                InputProps={{ startAdornment: <EmailIcon sx={{ mr: 1 }} /> }}
              />
            }
          />
        )}

        {/* 
          // ! CONTINUA TU 
        */}
      </Box>
    </form>
  );
}
